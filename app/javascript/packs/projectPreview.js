import {titleCaps, toTitleCase, nth, numberToEnglish, numberToItalian } from 'src/textUtils'
import weddingRingsSrc from 'images/wedding-rings'

$(document).ready(() => {
    I18n = window.I18n;
    const brideFirstName = $('#brideFirstName').val();
    //const brideLastName = $('#brideLastName').val();
    const groomFirstName = $('#groomFirstName').val();
    //const groomLastName = $('#groomLastName').val();
    const celebrantNamePrefix = $('#celebrantNamePrefix').val();
    const celebrantFirstName = $('#celebrantFirstName').val();
    const celebrantLastName = $('#celebrantLastName').val();
    const church = $('#church').val();
    const city = $('#city').val();
    const weddingdateStr = $('#weddingdate').val();
    const weddingDate = new Date(weddingdateStr);
    const day = weddingDate.getUTCDate();
    //const month = weddingDate.getUTCMonth();
    const year = weddingDate.getUTCFullYear();
    const hour = weddingDate.getUTCHours() > 12 ? weddingDate.getUTCHours() - 12 : weddingDate.getUTCHours();
    const ampm = weddingDate.getUTCHours() > 12 ? "pm" : "am";
    const minute = weddingDate.getUTCMinutes();

    //const locale = $('#locale').val();
    let monthLong = new Intl.DateTimeFormat(I18n.locale, { month: 'long' });

    let weddingRings = new Image();
    weddingRings.src = weddingRingsSrc;

    const c = document.getElementById("booklet");
    resizeCanvasToDisplaySize(c);

    const ctx = c.getContext("2d"); //, {alpha: false}
    ctx.translate(0.5, 0.5)
    const canvasCenterX = ctx.canvas.width / 2;
    const canvasCenterY = ctx.canvas.height / 2;
    const rectHeight = ctx.canvas.height - 40;
    const rectWidth = rectHeight * .707070707;
    ctx.fillStyle = "#FAFDF3";
    ctx.fillRect(canvasCenterX - rectWidth - 4, canvasCenterY - (rectHeight/2), rectWidth, rectHeight); //x, y, width, height
    ctx.fillRect(canvasCenterX + 4, canvasCenterY - (rectHeight/2), rectWidth, rectHeight); //x, y, width, height

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#CFB997";
    ctx.strokeRect(canvasCenterX - rectWidth - 4, canvasCenterY - (rectHeight/2), rectWidth, rectHeight);
    ctx.strokeRect(canvasCenterX + 4, canvasCenterY - (rectHeight/2), rectWidth, rectHeight);

    const pageOneCenterX = canvasCenterX - rectWidth - 4 + (rectWidth / 2);
    const pageTwoCenterX = canvasCenterX + 4 + (rectWidth/2);
    const pagesTop = canvasCenterY - (rectHeight/2);
    const pagesBottom = canvasCenterY + (rectHeight/2);

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const lclStrings = {
        inTheMorning: {
            en: " in the Morning",
            it: " del Mattino",
            es: " por la Mañana"
        },
        intheEvening: {
            en: " in the Evening",
            it: " di Sera",
            es: " por la Noche"
        },
        inTheAfternoon: {
            en: " in the Afternoon",
            it: " del Pomeriggio",
            es: " por la Tarde"
        },
        of: {
            en: " of ",
            it: " del mese di ",
            es: " del mes de "
        }
    }

    document.fonts.ready.then(function () {
        console.log("wedding date = " + weddingdateStr);
        while(true){
            if(typeof I18n.t === 'function'){
                break;
            }
        }
        console.log('All fonts in use by visible text have loaded.');
        console.log('Tangerine loaded? ' + document.fonts.check('1em Tangerine'));  // true
        console.log('EB Garamond loaded? ' + document.fonts.check("1em 'EB Garamond'"));  // true
        ctx.font = "80px Tangerine";
        ctx.fillStyle = "darkred";
        ctx.fillText("&",pageOneCenterX,pagesTop+85);
    
        ctx.font = "60px Tangerine";
        ctx.fillStyle = "#D4AF37";
        ctx.fillText(I18n.t('pages.projectPreview.ourWeddingCeremony'),pageOneCenterX,canvasCenterY);

        ctx.textAlign = "right";
        ctx.fillText(brideFirstName,pageOneCenterX-35,pagesTop+65);
        ctx.textAlign = "left";
        ctx.fillText(groomFirstName,pageOneCenterX+15,pagesTop+110);

        ctx.textAlign = "center";
        ctx.font = "normal small-caps 400 18px 'EB Garamond'";
        ctx.fillStyle = "#00007E";
        let dayStr  = "";
        let yearStr = "";
        let hourStr = "";
        let minuteStr = "";
        let timeStr = "";
        switch(I18n.locale){
            case 'en':
                dayStr  = nth(day);
                yearStr = numberToEnglish(year);
                hourStr = numberToEnglish(hour);
                minuteStr = numberToEnglish(minute);
                timeStr = toTitleCase(hourStr) + " " + ((minute == 0) ? "O'Clock" : titleCaps(minuteStr));
                break;
            case 'it':
                dayStr  = 'Il giorno ' + numberToItalian(day);
                yearStr = "dell'Anno " + numberToItalian(year);
                hourStr = numberToItalian(hour);
                minuteStr = numberToItalian(minute);
                timeStr = 'Alle ore ' + toTitleCase(hourStr) + ((minute == 30) ? ' e Mezza' : (minute > 0 ? ' e ' + titleCaps(minuteStr) : ''));
                break;
            default:
                dayStr  = nth(day);
                yearStr = numberToEnglish(year);
                hourStr = numberToItalian(hour);
                minuteStr = numberToEnglish(minute);
                timeStr = toTitleCase(hourStr) + " " + ((minute == 0) ? "O'Clock" : titleCaps(minuteStr));
        }

        timeStr += ampm == 'am' ? lclStrings.inTheMorning[I18n.locale] : (hour >= 5 ? lclStrings.intheEvening[I18n.locale] : lclStrings.inTheAfternoon[I18n.locale]);

        ctx.fillText(titleCaps(dayStr) + lclStrings.of[I18n.locale] + toTitleCase(monthLong.format(weddingDate)),pageOneCenterX,pagesBottom-180);
        ctx.fillText(titleCaps(yearStr),pageOneCenterX,pagesBottom-150);

        ctx.fillText(timeStr,pageOneCenterX,pagesBottom-120);
        ctx.fillText(titleCaps(church),pageOneCenterX,pagesBottom-90);
        ctx.fillText(titleCaps(city),pageOneCenterX,pagesBottom-60);

        ctx.font = "normal small-caps 400 36px 'EB Garamond'";
        ctx.fillText(I18n.t('pages.projectPreview.theWeddingParty'),pageTwoCenterX,pagesTop+60);

        ctx.font = "normal small-caps 400 18px 'EB Garamond'";
        ctx.fillText(celebrantNamePrefix + ' ' + celebrantFirstName + ' ' + celebrantLastName,pageTwoCenterX,pagesBottom-90);

        ctx.font = "30px 'Pinyon Script'";
        ctx.fillText(I18n.t('activerecord.attributes.user.role_celebrant'),pageTwoCenterX,pagesBottom-130);
    });


    weddingRings.onload = ev => {
        ctx.drawImage(weddingRings,pageOneCenterX-35,canvasCenterY-150,70,70);
    }
});


function resizeCanvasToDisplaySize(canvas) {
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
 
    // If it's resolution does not match change it
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true;
    }
 
    return false;
}
