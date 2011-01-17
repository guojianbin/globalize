(function($) {
    var cultures = $.global.cultures,
        en = cultures.en,
        standard = en.calendars.standard,
        culture = cultures["bo-CN"] = $.extend(true, {}, en, {
        name: "bo-CN",
        englishName: "Tibetan (PRC)",
        nativeName: "བོད་ཡིག (ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།)",
        language: "bo",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["$-n","$n"],
                groupSizes: [3,0],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                firstDay: 1,
                days: {
                    names: ["གཟའ་ཉི་མ།","གཟའ་ཟླ་བ།","གཟའ་མིག་དམར།","གཟའ་ལྷག་པ།","གཟའ་ཕུར་བུ།","གཟའ་པ་སངས།","གཟའ་སྤེན་པ།"],
                    namesAbbr: ["ཉི་མ།","ཟླ་བ།","མིག་དམར།","ལྷག་པ།","ཕུར་བུ།","པ་སངས།","སྤེན་པ།"],
                    namesShort: ["༧","༡","༢","༣","༤","༥","༦"]
                },
                months: {
                    names: ["སྤྱི་ཟླ་དང་པོ།","སྤྱི་ཟླ་གཉིས་པ།","སྤྱི་ཟླ་གསུམ་པ།","སྤྱི་ཟླ་བཞི་པ།","སྤྱི་ཟླ་ལྔ་པ།","སྤྱི་ཟླ་དྲུག་པ།","སྤྱི་ཟླ་བདུན་པ།","སྤྱི་ཟླ་བརྒྱད་པ།","སྤྱི་ཟླ་དགུ་པ།","སྤྱི་ཟླ་བཅུ་པོ།","སྤྱི་ཟླ་བཅུ་གཅིག་པ།","སྤྱི་ཟླ་བཅུ་གཉིས་པ།",""],
                    namesAbbr: ["ཟླ་ ༡","ཟླ་ ༢","ཟླ་ ༣","ཟླ་ ༤","ཟླ་ ༥","ཟླ་ ༦","ཟླ་ ༧","ཟླ་ ༨","ཟླ་ ༩","ཟླ་ ༡༠","ཟླ་ ༡༡","ཟླ་ ༡༢",""]
                },
                AM: ["སྔ་དྲོ","སྔ་དྲོ","སྔ་དྲོ"],
                PM: ["ཕྱི་དྲོ","ཕྱི་དྲོ","ཕྱི་དྲོ"],
                eras: [{"name":"སྤྱི་ལོ","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy'ལོའི་ཟླ' M'ཚེས' d",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "yyyy'ལོའི་ཟླ' M'ཚེས' d HH:mm",
                    F: "yyyy'ལོའི་ཟླ' M'ཚེས' d HH:mm:ss",
                    M: "'ཟླ་' M'ཚེས'd",
                    Y: "yyyy.M"
                }
            })
        }
    }, cultures["bo-CN"]);
    culture.calendar = culture.calendars.standard;
})(Globalization);