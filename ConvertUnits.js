const convertToPx = (valueText) => {
    let regex = /(?<number>[\d]{1,})(?<unit>rem|vh|px|vw)/;
    let match = valueText.match(regex);
    let number = match.groups.number;
    let unit = match.groups.unit;

    const remToPx = (value) =>{
        const fontSize = getComputedStyle(document.documentElement).fontSize;
        return parseFloat(fontSize) * value;
    }
    
    const vhToPx = (value) =>{
        const vh = parseFloat(window.innerHeight);
        return vh * (value/100);
    }
    
    const vwToPx = (value) =>{
        const vw = parseFloat(window.innerWidth);
        return vw * (value/100);
    }

    switch(unit){
        case 'rem': 
            return remToPx(number);
        case 'vh':
            return vhToPx(number);
        case 'vw':
            return vwToPx(number);
        default:
            return number;
    }
}


const convertToRem = (valueText) => {
    let regex = /(?<number>[\d]{1,})(?<unit>rem|vh|px|vw)/;
    let match = valueText.match(regex);
    let number = match.groups.number;
    let unit = match.groups.unit;
    let oneRemInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const pxToRem = (value) =>{
        return value / oneRemInPx;
    }

    const vhToRem = (value) =>{
        const px = (value/100) * parseFloat(window.innerHeight);
        return px / oneRemInPx;
    }

    const vwToRem = (value) =>{
        const px = (value/100) * parseFloat(window.innerWidth);
        return px / oneRemInPx;
    }  

    switch(unit){
        case 'px': 
            return pxToRem(number);
        case 'vh':
            return vhToRem(number);
        case 'vw':
            return vwToRem(number);
        default:
            return number;
    }

}


const convertToVh = (valueText) => {
    let regex = /(?<number>[\d]{1,})(?<unit>rem|vh|px|vw)/;
    let match = valueText.match(regex);
    let number = match.groups.number;
    let unit = match.groups.unit;
    let vhInPx = parseFloat(window.innerHeight);

    const pxToVh = (value) =>{
        return value / vhInPx;
    }

    const remToVh = (value) =>{
        let oneRemInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
        return (oneRemInPx * value) / vhInPx;
    }

    const vwToVh = (value) =>{
        const oneVw = (1/100) * parseFloat(window.innerWidth);
        const ratio = parseFloat(window.innerWidth) / vhInPx;
        return (oneVw * value) * ratio;
    }  

    switch(unit){
        case 'px': 
            return pxToVh(number);
        case 'rem':
            return remToVh(number);
        case 'vw':
            return vwToVh(number);
        default:
            return number;
    }
}

const convertToVh = (valueText) => {
    let regex = /(?<number>[\d]{1,})(?<unit>rem|vh|px|vw)/;
    let match = valueText.match(regex);
    let number = match.groups.number;
    let unit = match.groups.unit;
    let vwInPx = parseFloat(window.innerWidth);

    const pxToVw = (value) =>{
        return value / vwInPx;
    }

    const remToVw = (value) =>{
        let oneRemInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
        return (oneRemInPx * value) / vwInPx;
    }

    const vhToVw = (value) =>{
        const oneVh = (1/100) * parseFloat(window.innerHeight);
        const ratio = parseFloat(window.innerHeigt) / vwInPx;
        return (oneVh * value) * ratio;
    }  

    switch(unit){
        case 'px': 
            return pxToVw(number);
        case 'rem':
            return remToVw(number);
        case 'vh':
            return vhToVw(number);
        default:
            return number;
    }
}










const convertTo = (valueText, type) =>{

    const regex = /(?<number>[\d]{1,})(?<unit>rem|vh|px|vw)/;
    const match = valueText.match(regex);
    const number = match.groups.number;
    const unit = match.groups.unit.toLowerCase();
    const fontSize = getComputedStyle(document.documentElement).fontSize;














}











class ConvertUnits{
    constructor(){

    }




















    
}