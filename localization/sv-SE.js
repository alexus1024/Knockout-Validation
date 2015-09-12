/**
 * Localization file for Swedish - Sweden (sv-SE)
 */
(function(factory) {
    /*global ko,require,define,module*/
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory(require('../'));
    } else if (typeof define === 'function' && define.amd) {
        define(['knockout.validation'], factory);
    } else {
        factory(ko.validation);
    }
}(function(kv) {
    return kv.defineLocale('sv-SE', {
        required: 'Detta fält är obligatoriskt',
        min: 'Fyll i ett värde som är större än eller lika med {0}',
        max: 'Fyll i ett värde som är mindre än eller lika med {0}',
        minLength: 'Fyll i minst {0} tecken',
        maxLength: 'Fyll inte i fler än {0} tecken',
        pattern: 'Var god kontrollera värdet',
        step: 'Värdet måste ökas med {0}',
        email: 'Fyll i en korrekt e-postadress',
        date: 'Fyll i ett korrekt datum',
        dateISO: 'Fyll i ett korrekt datum',
        number: 'Fyll i ett nummer',
        digit: 'Fyll i en siffra',
        phoneUS: 'Fyll i ett korrekt telefonnummer',
        equal: 'Fyll i samma värde en gång till',
        notEqual: 'Fyll i ett annat värde',
        unique: 'Fyll i ett unikt värde'
    });
}));
