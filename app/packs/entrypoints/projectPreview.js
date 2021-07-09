import weddingRingsPath from '../images/wedding-rings.svg';
import '../src/titleCaps'

$(document).ready(() => {
    const brideFirstName = $('#brideFirstName').val();
    const brideLastName = $('#brideLastName').val();
    const groomFirstName = $('#groomFirstName').val();
    const groomLastName = $('#groomLastName').val();
    const celebrantNamePrefix = $('#celebrantNamePrefix').val();
    const celebrantFirstName = $('#celebrantFirstName').val();
    const celebrantLastName = $('#celebrantLastName').val();
    const church = $('#church').val();
    const city = $('#city').val();
    const weddingdateStr = $('#weddingdate').val();
    const weddingDate = new Date(weddingdateStr);
    const day = weddingDate.getUTCDate();
    const month = weddingDate.getUTCMonth();
    const year = weddingDate.getUTCFullYear();
    const hour = weddingDate.getUTCHours() > 12 ? weddingDate.getUTCHours() - 12 : weddingDate.getUTCHours();
    const ampm = weddingDate.getUTCHours() > 12 ? "pm" : "am";
    const minute = weddingDate.getUTCMinutes();

    console.log("wedding date = " + weddingdateStr);
    //const locale = $('#locale').val();
    let monthLong = new Intl.DateTimeFormat(I18n.currentLocale(), { month: 'long' });
    console.log(I18n.t('hello'));
    console.log('current locale is ' + I18n.currentLocale());
    console.log(I18n.translations);

    let weddingRings = new Image();
    weddingRings.src = weddingRingsPath;

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

    document.fonts.ready.then(function () {
        console.log('All fonts in use by visible text have loaded.');
        console.log('Tangerine loaded? ' + document.fonts.check('1em Tangerine'));  // true
        console.log('EB Garamond loaded? ' + document.fonts.check("1em 'EB Garamond'"));  // true
        ctx.font = "80px Tangerine";
        ctx.fillStyle = "darkred";
        ctx.fillText("&",pageOneCenterX,pagesTop+85);
    
        ctx.font = "60px Tangerine";
        ctx.fillStyle = "#D4AF37";
        ctx.fillText("Our Wedding Ceremony",pageOneCenterX,canvasCenterY);

        ctx.textAlign = "right";
        ctx.fillText(brideFirstName,pageOneCenterX-35,pagesTop+65);
        ctx.textAlign = "left";
        ctx.fillText(groomFirstName,pageOneCenterX+15,pagesTop+110);

        ctx.textAlign = "center";
        ctx.font = "normal small-caps 400 18px 'EB Garamond'";
        ctx.fillStyle = "#00007E";
        let ordinalizedDay = nth(day);
        ctx.fillText(toTitleCase(ordinalizedDay) + ' of ' + monthLong.format(weddingDate),pageOneCenterX,pagesBottom-180);
        ctx.fillText(titleCaps(numberToEnglish(year)),pageOneCenterX,pagesBottom-150);
        let timeStr = toTitleCase(numberToEnglish(hour)) + " ";
        timeStr += (minute == 0) ? "O'Clock" : titleCaps(numberToEnglish(minute));
        timeStr += ampm == 'am' ? ' in the Morning' : (hour >= 5 ? ' in the Evening' : ' in the Afternoon');
        ctx.fillText(timeStr,pageOneCenterX,pagesBottom-120);
        ctx.fillText(titleCaps(church),pageOneCenterX,pagesBottom-90);
        ctx.fillText(titleCaps(city),pageOneCenterX,pagesBottom-60);

        ctx.font = "normal small-caps 400 36px 'EB Garamond'";
        ctx.fillText('The Wedding Party',pageTwoCenterX,pagesTop+60);

        ctx.font = "normal small-caps 400 18px 'EB Garamond'";
        ctx.fillText(celebrantNamePrefix + ' ' + celebrantFirstName + ' ' + celebrantLastName,pageTwoCenterX,pagesBottom-90);

        ctx.font = "30px 'Pinyon Script'";
        ctx.fillText('Celebrant',pageTwoCenterX,pagesBottom-130);
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

const nth = i => {
    const n = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const s = ["th", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth",
         "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth"];
    const p = ["twent", "thirt", "fourt", "fift", "sixt", "sevent", "eight", "ninet"];
    const c = ["hundred", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];
    const b = Math.floor(Math.log10(i));
    if(i<20) return s[i]; // Special case for sub-20
    if(b==1){ // Between 21 and 99
      if(i%10 === 0) return p[Math.floor(i/10)-2]+"ieth"; // On the tens, return p+"ieth"
      return p[Math.floor(i/10)-2] + "y-" + s[i%10]; // Otherwise, return hyphenated
    }
    if(b==2){ // Between 100 and 999
        const e = Math.floor(i/Math.pow(10,b)); // The first number
        if(i==100){
            return n[e-1]+"-"+c[0]+nth(i-(e*Math.pow(10,b)));
        }
        return n[e-1]+"-"+c[0]+" "+nth(i-(e*Math.pow(10,b)));
    }
    // Greater than 1000 we break into groups of 10^3 followed by a multiplier
    const m = b%3 + 1; // Take the first m digits off
    const cm = Math.floor(b/3);
    const x = Math.floor(i/Math.pow(10,b-m+1));
    const numberToString = function(y){ // Converts a number less than 1000 to its string representation as a multiplier
      if(y<20) return n[y-1];
      if(y<100) return p[Math.floor(y/10)-2] + "y-" + n[y%10-1];
      return n[Math.floor(y/100)-1] + " " + c[0] + " " + numberToString(y-(Math.floor(y/100)*100));
    }
    if(i % 1000 == 0){
        return numberToString(x) + " " + c[cm] + nth(i-(x*Math.pow(10, b-m+1)));
    }
    return numberToString(x) + " " + c[cm] + " " + nth(i-(x*Math.pow(10, b-m+1)));
}

const toTitleCase = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const numberToEnglish = n => {
        
    let str = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = 'and';

    /* Remove spaces and commas */
    str = str.replace(/[, ]/g,"");

    /* Is number zero? */
    if( parseInt( str ) === 0 ) {
        return 'zero';
    }
    
    /* Array of units as words */
    units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    
    /* Array of tens as words */
    tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    
    /* Array of scales as words */
    scales = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];
    
    /* Split user argument into 3 digit chunks from right to left */
    start = str.length;
    chunks = [];
    while( start > 0 ) {
        end = start;
        chunks.push( str.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
    }
    
    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if( chunksLen > scales.length ) {
        return '';
    }
    
    /* Stringify each integer in each chunk */
    words = [];
    for( i = 0; i < chunksLen; i++ ) {
        
        chunk = parseInt( chunks[i] );
        
        if( chunk ) {
            
            /* Split chunk into array of individual integers */
            ints = chunks[i].split( '' ).reverse().map( parseFloat );
        
            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if( ints[1] === 1 ) {
                ints[0] += 10;
            }
            
            /* Add scale word if chunk is not zero and array item exists */
            if( ( word = scales[i] ) ) {
                words.push( word );
            }
            
            /* Add unit word if array item exists */
            if( ( word = units[ ints[0] ] ) ) {
                words.push( word );
            }
            
            /* Add tens word if array item exists */
            if( ( word = tens[ ints[1] ] ) ) {
                words.push( word );
            }
            
            /* Add 'and' string after units or tens integer if: */
            if( ints[0] || ints[1] ) {
                
                /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                if( ints[2] || (i + 1) < chunksLen ) {
                    words.push( and );
                    and = '';
                }
            
            }
            
            /* Add hundreds word if array item exists */
            if( ( word = units[ ints[2] ] ) ) {
                words.push( word + ' hundred' );
            }
            
        }
        
    }
    
    return words.reverse().join( ' ' );
    
}
