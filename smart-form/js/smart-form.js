document.addEventListener('DOMContentLoaded', () => smart_form.init() );

/**
 * Объект для работы с яндекс доставкой.
 *
 * @since 1.0.0
 */
let smart_form = {

    /**
     * Инициализация объета.
     *
     * @since 1.0.0
     */
    init: function() {
        this.bindEvents();
    },

    /**
     * Установка событий при работе с формой и виджетом.
     *
     * @since 1.0.0
     */
    bindEvents: function() {
        this.formInputEvents();
        this.showReference();
        this.telValidation();
        this.createOrder();
    },

    /**
     * Анимация полей формы.
     *
     * @since 1.0.0
     */
    formInputEvents : function () {
        let formInputs = jQuery('input.wl-input');
        let formInputLabels = jQuery('#wl-ya-delivery-form label');

        this.drawInputMark(formInputs);

        // Изменяем значения атрибутов value у input
        jQuery(formInputs).on('keyup', e => {
            let val = jQuery(e.target).val();
            jQuery(e.target).attr('value', val);
        });

        // Проставление маркеров на автоматически подставленных значениях в инпутах
        formInputs.each(i => {
            let curInpName = jQuery(formInputs[i]).attr('name');
            let curInpLabel = jQuery(`#wl-ya-delivery-form label[for="${curInpName}"]`);
            let curInp = jQuery(`#wl-ya-delivery-form input[name="${curInpName}"]`);
            let curMark = curInp.next();

            if (curInpLabel.hasClass('wl-label-valid')) {
                curMark.addClass('wl-valid-mark');
            }

            if (curInpLabel.attr('for') === 'wl-delivery-phone') curInpLabel.addClass('wl-label-valid');

            // Добавляем маркер при вводе в инпут
            curInp.on('input', () => {
                if (curInp.val() == "") {
                    curMark.removeClass('wl-clean-mark');
                    curMark.removeClass('wl-valid-mark');
                } else {
                    curMark.removeClass('wl-valid-mark');
                    curMark.addClass('wl-clean-mark');
                }
            })
        });

        jQuery(document).mousedown(e => {
            let target = jQuery(e.target);
            if (target.hasClass('wl-input')
                || target.hasClass('wl-form-label')
                || target.hasClass('wl-input-mark')) {
                return null;
            }
            inputValidation(e);
        });
        jQuery(formInputs).focus(e => {
            inputValidation(e);
        });

        function inputValidation(e) {
            let target = jQuery(e.target);
            // Событие по полям формы
            if (target.hasClass('wl-input')) {

                if ( target.attr('data-active') != 'undefined' ) {
                    let prevInput = jQuery(`input.wl-input[data-active="Y"]`);
                    let prevInputName = prevInput.attr('name');
                    let prevInputLabel = jQuery(`#wl-ya-delivery-form label[for=${prevInputName}]`);
                    let isRequired = prevInput.attr('data-required');
                    let mark = jQuery(`input.wl-input[data-active="Y"] + span.wl-input-mark`);

                    prevInput.removeAttr('data-active');
                    prevInputLabel.removeClass('wl-label-active');
                    prevInputLabel.removeClass('wl-label-valid');
                    mark.removeClass('wl-clean-mark');
                    if (jQuery(prevInput).val() === "") {
                        if (isRequired !== undefined) {
                            prevInputLabel.addClass('wl-label-alert');
                            mark.removeClass('wl-valid-mark');
                        }
                    } else {
                        prevInputLabel.removeClass('wl-label-alert');
                        prevInputLabel.addClass('wl-label-valid');
                        mark.addClass('wl-valid-mark');
                    }
                }
                target.attr('data-active', 'Y');

                let thisInputName = e.target.name;
                let thisInputLabel = jQuery(`#wl-ya-delivery-form label[for=${thisInputName}]`);
                let thisMark = jQuery(`input.wl-input[name="${thisInputName}"] + span.wl-input-mark`);

                formInputLabels.each(i => {
                    jQuery(formInputLabels[i]).removeClass('wl-label-active');
                });
                thisInputLabel.addClass('wl-label-active');

                thisMark.removeClass('wl-valid-mark');
                thisMark.addClass('wl-clean-mark');

                // Клик произошел по маркеру, добавляем событие
                jQuery('.wl-clean-mark').on('click', e => {
                    smart_form.clearInput(e);
                });
            }

            // Событие не по полям формы
            else {
                let curInputLabel = jQuery(`label.wl-label-active`);
                let curInputName = jQuery(curInputLabel).attr('for');
                let curInput = jQuery(`input.wl-input[name=${curInputName}]`);
                let isRequired = curInput.attr('data-required');
                let mark = jQuery(`input.wl-input[name=${curInputName}] + span.wl-input-mark`);

                curInputLabel.removeClass('wl-label-active');
                if (curInput.val() === "") {
                    mark.removeClass('wl-valid-mark');
                    mark.removeClass('wl-clean-mark');
                    if (smart_form.isSet(isRequired)) {
                        curInputLabel.removeClass('wl-label-valid');
                        curInputLabel.addClass('wl-label-alert');
                    }
                } else {
                    curInputLabel.removeClass('wl-label-alert');
                    curInputLabel.addClass('wl-label-valid');
                    mark.addClass('wl-valid-mark');
                    mark.removeClass('wl-clean-mark');
                }
            }
        }
    },

    /**
     * События инпута с населенным пунктом.
     *
     * @since 1.0.0
     */
    cityInputEvent: function(e) {
        jQuery(document).unbind('keydown', smart_form.cityInputEvent);
        let target = jQuery('#list-of-cities li')[0];
        if(e.keyCode === 13) {
            jQuery('#wl-delivery-address').val(window.wl_region.name);
            jQuery(target).click();
        }
    },

    /**
     * Очистка текущего инпута
     *
     * @since 1.0.0
     *
     * @param event
     */
    clearInput: function(event) {
        jQuery('span.wl-input-mark').unbind();
        let target = jQuery(event.target);
        target.prev().focus();
        target.prev().val("");
        target.removeClass('wl-clean-mark');
        target.removeClass('wl-valid-mark');
    },

    /**
     *  События при отправке формы чекаута.
     *
     *  @since 1.0.0
     */
    validateForm : function () {
        let requiredInp = jQuery(`#wl-ya-delivery-form input[data-required="Y"]`);
        let error = null;
        let curInputName = null;
        let curInputLabel = null;
        requiredInp.each(i => {
            let iterableInput = jQuery(requiredInp[i]);
            curInputName = iterableInput.attr('name');
            curInputLabel = jQuery(`#wl-ya-delivery-form label[for=${curInputName}]`);
            if (iterableInput.val() === "") {
                error = true;
                curInputLabel.addClass('wl-label-alert');
            }
            else if (iterableInput.attr('name') === "wl-delivery-phone" ) {
                if(iterableInput.attr('data-tel').length < 11) {
                    error = true;
                    this.telInputEventBlur(jQuery('#wl-delivery-phone'), /^(7)[0-9]{10}$/g)
                }
            }
        });

        if(this.isSet(error)) {
            let alertArea = jQuery(`#wl-ya-delivery-form label.wl-label-alert`);
            this.scroll(alertArea);
            return false;
        }
        else return true;
    },

    /**
     * Отображение подсказок в форме.
     *
     * @since 1.0.0
     */
    showReference: function() {
        jQuery('.wl-ya-delivery-form .has-reference').on('click', e => {
            e.stopPropagation();
            let reference = jQuery(e.currentTarget).children('.has-reference__text');
            if (jQuery(reference).hasClass('d-none')) jQuery(reference).removeClass('d-none');
            else jQuery(reference).addClass('d-none');
        });
    },

    /**
     * Валидация инпута с телефоном.
     *
     * @since 1.0.0
     */
    telValidation : function () {
        let telInput = jQuery('#wl-delivery-phone');
        let mask = '+7 (___) ___-__-__';
        let pattern = /^(7)[0-9]{10}$/g;

        smart_form.telInputEventClick(telInput, mask, true);

        telInput.on('blur', () => {
            smart_form.telInputEventBlur(telInput, pattern);
        });

        telInput.click( () => {
            smart_form.telInputEventClick(telInput, mask);
        });

        telInput.on('input', (e) => {
            smart_form.telInputEventInput(telInput, mask, pattern, e);
        });
    },

    /**
     * Работа с инпутом телефона при снятии фокуса.
     *
     * @since 1.0.0
     */
    telInputEventBlur : function(telInput, pattern) {
        let tel = telInput.val().replace(/[\D]+/g, '');
        telInput.attr('data-tel', tel);

        let thisMark = jQuery(`input.wl-input[name="wl-delivery-phone"] + span.wl-input-mark`);
        thisMark.removeClass('wl-clean-mark');

        if (tel.match(pattern) === null) {
            let telInputLabel = jQuery(`label[for='wl-delivery-phone']`);
            let telInputNotice = this.drawTelNotice();
            thisMark.removeClass('wl-valid-mark');
            telInputLabel.removeClass('wl-label-active');
            telInputLabel.removeClass('wl-label-valid');
            telInputLabel.addClass('wl-label-alert');
            telInput.removeAttr('data-active');
            jQuery('#wl-billing-tel-notice').remove();
            telInput.parent().after(telInputNotice);
        } else {
            thisMark.addClass('wl-valid-mark');
            jQuery('#wl-billing-tel-notice').remove();
        }
    },

    /**
     * Работа с инпутом телефона при клике на него.
     *
     * @since 1.0.0
     */
    telInputEventClick : function(telInput, mask, hasCookieTel = false) {
        let telString = jQuery(telInput).val().replace(/[\D]+/g, '');

        // Подстановка значений телефона в маску
        telString = telString.split('');
        for( let i = 1; i < telString.length; i++) {
            mask = mask.replace('_', telString[i]);
        }
        telInput.val(mask);

        if(hasCookieTel) {
            telInput.attr('data-tel', mask.replace(/[\D]+/g, ''));
            return;
        }

        // Определение позиции каретки
        let cursorPosition = mask.indexOf('_');
        cursorPosition = (cursorPosition === -1) ? mask.length : cursorPosition;

        let obj = document.getElementById('wl-delivery-phone');
        smart_form.getCursorPosition(obj, cursorPosition, cursorPosition);
    },

    /**
     * Работа с инпутом телефона при вводе или удалении.
     *
     * @since 1.0.0
     */
    telInputEventInput: function(telInput, mask, pattern, e) {
        let eventChar = e.originalEvent.data;
        let telString = telInput.val().replace(/[\D]+/g, '');

        // Запрет на заполнение больше установленной длины
        if(telString.length > mask.length) telString = telString.slice(0, mask.length);

        // Проверка, что действие не является удалением
        if(eventChar !== null && typeof eventChar !== "undefined") {
            telInput.attr('data-tel', telString);
            if(eventChar.match(/[\d]/) === null) {
                telString = telString.replace(eventChar, '');
            }
            for( let i = 1; i < telString.length; i++) {
                mask = mask.replace('_', telString[i]);
            }
            telString = mask;
            // Является удалением или вставкой
        } else {
            if(telString !== telInput.attr('data-tel')) {
                if(telString.length === 12) {
                    telString = '7' + telString.slice(2, telString.length);
                }
                if(telString.length === 11 && telString[0] !== '7') {
                    telString = '7' + telString.slice(1, telString.length);
                }
                telInput.attr('data-tel', telString);
                telString = telString.split('');

            } else {
                if(telString.length < 11) telString = telString.split('').slice(0, -1);
            }
            for( let i = 1; i < telString.length; i++) {
                mask = mask.replace('_', telString[i]);
            }
            telString = mask;
        }
        telInput.val(telString);

        // Определение позиции каретки
        let cursorPosition = mask.indexOf('_');
        cursorPosition = (cursorPosition === -1) ? mask.length : cursorPosition;

        let obj = document.getElementById('wl-delivery-phone');

        smart_form.getCursorPosition(obj, cursorPosition, cursorPosition);
    },

    /**
     * Определение позиции каретки.
     *
     * @since 1.0.0
     */
    getCursorPosition: function(obj, start, end) {
        if(obj.setSelectionRange)
        {
            // На устройствах Apple делаем задержку, чтобы каретка передвинулась
            if(navigator.userAgent.match(/i[PO]/i)) {
                setTimeout( () => {
                    obj.setSelectionRange(start, end);
                }, 50)
            }
            else {
                obj.setSelectionRange(start, end);
            }
        }
        // IE < 9
        else if (obj.createTextRange) {
            let range = obj.createTextRange();
            range.collapse(true);
            range.moveEnd('character', start);
            range.moveStart('character', start);
            range.select();
        }
    },

	/**
	 * Создание заказа в кабинете яндекс-доставки.
	 *
	 * @since 1.0.0
	 */
    createOrder: function() {
        jQuery('.ya-delivery-choose-button').click(function () {
            if( smart_form.validateForm() ) {
                smart_form.showThanksMessage();
            }
            else {
                //alert('Заполните обязательные поля');
            }
        })
    },

    /**
     * Отображение сообщения "Спасибо за ваш заказ".
     *
     * @since 1.0.0
     */
    showThanksMessage: function() {
        jQuery('.wl-thankyou-message-container').removeClass('d-none');
        setTimeout(() => {
            jQuery('.wl-thankyou-message-container').addClass('d-none');
        }, 5000)
    },

    /**
     * Проверка переменной на пустоту.
     *
     * @since 1.0.0
     *
     * @param variable
     * @returns {boolean}
     */
    isSet: function(variable) {
        return (typeof variable !== 'undefined' && variable !== null);
    },

    /**
     * Прокрутка экрана до заданного объекта.
     *
     * @since 1.0.0
     *
     * @param target
     */
    scroll: function(target) {
        let position = jQuery(target).offset().top;
        jQuery('html, body').stop().animate(
            {scrollTop : position - 150},
            500,
            'swing'
        );
    },

    /**
     * Отрисовка меток в инпутах формы чекаута.
     *
     * @since 1.0.0
     */
    drawInputMark : function (inputs) {
        inputs.after(
            `<span class="wl-input-mark"></span>`
        );
    },

    /**
     * Отрисовка уведомления при неправильном введённом
     * формате телефона.
     *
     * @since 1.0.0
     *
     * @return {string}
     */
    drawTelNotice: function() {
        return `<div id="wl-billing-tel-notice">Пример: +7 (111) 222-33-44</div>`;
    }
};