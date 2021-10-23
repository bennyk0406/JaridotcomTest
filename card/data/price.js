class jobData {
    constructor(others, hot, cool, insurance) {
        this.price = {
            others, 
            hot, 
            cool, 
            insurance
        };
    }
};

const priceList = {
    "mafia": {
        "마피아": new jobData(8, 10, 10, 12),
        "스파이": new jobData(4, 6, 6, 8),
        "짐승인간": new jobData(6, 8, 8, 12),
        "마담": new jobData(5, 7, 7, 9),
        "도둑": new jobData(6, 8, 8, 10),
        "마녀": new jobData(4, 6, 6, 8),
        "과학자": new jobData(6, 10, 8, 0)
    },
    "citizen_important": {
        "경찰": new jobData(8, 10, 10, 11),
        "자경단원": new jobData(7, 9, 9, 10),
        "의사": new jobData(8, 10, 10, 11),
    },
    "citizen_others": {
        "군인": new jobData(5, 8, 8, 5),
        "정치인": new jobData(5, 7, 7, 8),
        "영매": new jobData(5, 7, 7, 8),
        "연인": new jobData(4, 6, 6, 7),
        "기자": new jobData(6, 8, 8, 9),
        "건달": new jobData(4, 6, 6, 7),
        "사립탐정": new jobData(6, 8, 8, 9),
        "도굴꾼": new jobData(3, 5, 5, 6),
        "테러리스트": new jobData(5, 7, 7, 7),
        "성직자": new jobData(6, 8, 8, 9),
        "예언자": new jobData(5, 7, 7, 8),
        "판사": new jobData(5, 7, 7, 8),
        "간호사": new jobData(5, 8, 8, 6),
        "마술사": new jobData(5, 7, 7, 8),
        "해커": new jobData(6, 8, 8, 9),
        "심리학자": new jobData(6, 8, 8, 9),
        "용병": new jobData(9, 11, 11, 12)
    },
    "cult": {
        "교주": new jobData(4, 4, 4, 4)
    }
};