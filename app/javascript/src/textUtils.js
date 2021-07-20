/*
 * Title Caps
 * 
 * Ported to JavaScript By John Resig - http://ejohn.org/ - 21 May 2008
 * Original by John Gruber - http://daringfireball.net/ - 10 May 2008
 * License: http://www.opensource.org/licenses/mit-license.php
 */

const titleCaps = (title) => {
	const small = "(a|an|and|as|at|but|by|en|for|if|in|is|of|on|or|the|to|v[.]?|via|vs[.]?)";
	const punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";
	const lower = (word) => word.toLowerCase();
	const upper = (word) => (word.substr(0,1).toUpperCase() + word.substr(1));
	const split = /[:.;?!] |(?: |^)["Ò]/g;

	let parts = [], index = 0;
	
	while (true) {
		var m = split.exec(title);

		parts.push( title.substring(index, m ? m.index : title.length)
			.replace(/\b([A-Za-z][a-z.'Õ]*)\b/g, function(all){
				return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
			})
			.replace(RegExp("\\b" + small + "\\b", "ig"), lower)
			.replace(RegExp("^" + punct + small + "\\b", "ig"), function(all, punct, word){
				return punct + upper(word);
			})
			.replace(RegExp("\\b" + small + punct + "$", "ig"), upper));
		
		index = split.lastIndex;
		
		if ( m ) parts.push( m[0] );
		else break;
	}

	return parts.join("").replace(/ V(s?)\. /ig, " v$1. ")
		.replace(/(['Õ])S\b/ig, "$1s")
		.replace(/\b(AT&T|Q&A)\b/ig, function(all){
			return all.toUpperCase();
		});
}

const toTitleCase = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

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

/*
	Convertitore di numeri interi in corrispettivi letterali.
	Esempio:	123 => centoventitre'
	Born:	10 Giugno 2012
	Licenza: GNU General Public License (versione 3 o successive)
	Autore: Valerio Bozzolan - Reyboz.it
*/
const numberToItalian = (numstr, centOOttanta) => {
	const mono	= new Array ("", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove");
	const duplo	= new Array ("dieci", "undici", "dodici", mono[3] + "dici", "quattordici", "quindici", "sedici", "dicias" + mono[7], "dici" + mono[8], "dician" + mono[9]);
	const deca	= new Array ("", duplo[0], "venti", mono[3] + "nta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta");
	const cento	= new Array ("cent", "cento");
	const mili	= new Array ();
	mili[0]	= new Array ("", "mille", "milione", "miliardo", "bilione", "biliardo");
	mili[1]	= new Array ("", "mila", "milioni", "miliardi", "bilioni", "biliardi");
	const text	= new Array ();
	const cifra	= new Array ();
	let result	= "";
	let sezione	= 0;
	
	centOOttanta = centOOttanta || false;
	numstr += '';
	// Non deve cominciare per zero altrimenti parseInt() impazzisce...
	while ( numstr.substr(0, 1) == "0" && numstr.length != 1 ) {
		numstr	= numstr.substr(1, numstr.length);
	}
	let num	= parseInt(numstr);
	switch( numstr.length % 3 ) {
		case 1:	numstr	= "00" + numstr;
			break;
		case 2:	numstr	= "0" + numstr;
	}
	let numlen	= numstr.length;
	if( isNaN(num) ) {
		return "Non e' un numero!";
	} else if ( num < 0 ) {
		return "Numero negativo!";
	} else if ( numstr.length > 6 * 3 ) {
		return "Limite superato!";
	} else if( num == 0 ) {
		return "zero";
	}
	let subnumerostring = '';
	let subnumero = 0;
	let prime2cifre = 0;
	while( (sezione + 1) * 3 <= numlen ) {
		subnumerostring = numstr.substr(((numlen - 1) - ((sezione + 1) * 3)) + 1, 3);
		if( subnumerostring != "000" ) {
			subnumero = parseInt(subnumerostring);
			cifra[0] = subnumerostring.substr(0, 1);
			cifra[1] = subnumerostring.substr(1, 1);
			cifra[2] = subnumerostring.substr(2, 1);
			prime2cifre	= parseInt(cifra[1] * 10) + parseInt(cifra[2]);
			if( prime2cifre < 10 ) {
				text[2]	= mono[cifra[2]];
				text[1]	= "";
			} else if( prime2cifre < 20 ) {
				text[2]	= "";
				text[1]	= duplo[prime2cifre - 10];
			} else {
				//	ventitre => ventitrè
				if( sezione == 0 && cifra[2] == 3 ) {
					text[2]	= "tre'";
				} else {
					text[2]	= mono[cifra[2]];
				}
				//	novantaotto => novantotto
				if( cifra[2] == 1 || cifra[2] == 8 ) {
					text[1]	= deca[cifra[1]].substr(0, deca[cifra[1]].length -1);
				} else {
					text[1]	= deca[cifra[1]];
				}
			}
			if( cifra[0] == 0 ) {
				text[0]	= "";
			} else {
				//	centoottanta => centottanta
				if( !centOOttanta && cifra[1] == 8 || (cifra[1] == 0 && cifra[2] == 8) ) {
					IDcent	= 0;
				} else {
					IDcent	= 1;
				}
				if( cifra[0] != 1 ) {
					text[0]	= mono[cifra[0]] + cento[IDcent];
				} else {
					text[0]	= cento[IDcent];
				}
			}
			//	unomille	=> mille
			//	miliardo	=> unmiliardo
			if( subnumero == 1 && sezione != 0 ) {
				if( sezione >= 2 ) {
					result	= "un" + mili[0][sezione] + result;
				} else {
					result	= mili[0][sezione] + result;
				}
			} else {
				result	= text[0] + text[1] + text[2] + mili[1][sezione] + result;
			}
		}
		sezione++;
	}
	return result;
}


export { titleCaps, toTitleCase, nth, numberToEnglish, numberToItalian };
