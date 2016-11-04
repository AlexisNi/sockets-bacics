/**
 * Created by alex on 03/11/2016.
 */

var moment=require('moment');
var now=moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.format('x'));
console.log(now.format('x'));


/*
var test=now.format.('x').valueOf();
*/
console.log(test);
var timestamp=1478255121591;
var timestampMoment=moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mma'));




/*
now.subtract(1,'year');
*/
/*
console.log(now.format());

console.log(now.format('h:mma'));
console.log(now.format('MMMM do YYYY ,h:mma'));*/
