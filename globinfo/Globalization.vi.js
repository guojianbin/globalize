(function($) {
    var cultures = $.global.cultures,
        en = cultures.en,
        standard = en.calendars.standard,
        culture = cultures["vi"] = $.extend(true, {}, en, {
        name: "vi",
        englishName: "Vietnamese",
        nativeName: "Tiếng Việt",
        language: "vi",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "₫"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                firstDay: 1,
                days: {
                    names: ["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],
                    namesAbbr: ["CN","Hai","Ba","Tư","Năm","Sáu","Bảy"],
                    namesShort: ["C","H","B","T","N","S","B"]
                },
                months: {
                    names: ["Tháng Giêng","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai",""],
                    namesAbbr: ["Thg1","Thg2","Thg3","Thg4","Thg5","Thg6","Thg7","Thg8","Thg9","Thg10","Thg11","Thg12",""]
                },
                AM: ["SA","sa","SA"],
                PM: ["CH","ch","CH"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy h:mm tt",
                    F: "dd MMMM yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["vi"]);
    culture.calendar = culture.calendars.standard;
})(Globalization);