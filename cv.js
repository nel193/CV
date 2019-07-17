var ctx = document.getElementById ('barraUno').getContext('2d');
							var al = 0;
							var inicio = 11;
							var cw = ctx.canvas.width;
							var ch = ctx.canvas.height;							
        					var sim = setInterval (progresoDeBarra, 30);
							var diff;
						

							function progresoDeBarra(){
								diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
								ctx.clearRect (0,0,cw,ch);
								ctx.lineWidth = 10;
								ctx.strokeStyle = '#24334F';
								ctx.fillStyle = '#394E6E';
								ctx.textAlign = 'center';
								ctx.font = "20pt arial";
								ctx.fillText (al + '%', cw * .5, ch * .5+2, cw);
								ctx.beginPath();
								ctx.arc (70,70,60, inicio, diff/10+inicio, false);
								ctx.stroke();
								
								if (al >= 85){
									clearTimeout (sim);
								}
								al++;
							}

var ctx2 = document.getElementById ('barraDos').getContext('2d');
							var al2 = 0;
							var inicio2 = 11;
							var cw2 = ctx2.canvas.width;
							var ch2 = ctx2.canvas.height;							
        					var sim2 = setInterval (progresoDeBarra2, 30);
							var diff2;

							function progresoDeBarra2(){
								diff2 = ((al2 / 100) * Math.PI * 2 * 10).toFixed(2);
								ctx2.clearRect (0,0,cw2,ch2);
								ctx2.lineWidth = 10;
								ctx2.strokeStyle = '#24334F';
								ctx2.fillStyle = '#394E6E';
								ctx2.textAlign = 'center';
								ctx2.font = "20pt arial"
								ctx2.fillText (al2 + '%', cw2 * .5, ch2 * .5+2, cw2);
								ctx2.beginPath();
								ctx2.arc (70,70,60, inicio2, diff2/10+inicio2, false);
								ctx2.stroke();
								if (al2 >= 40){
									clearTimeout (sim2);
								}
								al2++;
							}
							
var ctx3 = document.getElementById ('barraTres').getContext('2d');
							var al3 = 0;
							var inicio3 = 11;
							var cw3 = ctx3.canvas.width;
							var ch3 = ctx3.canvas.height;							
        					var sim3 = setInterval (progresoDeBarra3, 30);
							var diff3;

							function progresoDeBarra3(){
								diff3 = ((al3 / 100) * Math.PI * 2 * 10).toFixed(2);
								ctx3.clearRect (0,0,cw3,ch3);
								ctx3.lineWidth = 10;
								ctx3.strokeStyle = '#24334F';
								ctx3.fillStyle = '#394E6E';
								ctx3.textAlign = 'center';
								ctx3.font = "20pt arial"
								ctx3.fillText (al3 + '%', cw3 * .5, ch3 * .5+2, cw3);
								ctx3.beginPath();
								ctx3.arc (70,70,60, inicio3, diff3/10+inicio3, false);
								ctx3.stroke();
								if (al3 >= 80){
									clearTimeout (sim3);
								}
								al3++;
							}
							
var ctx4 = document.getElementById ('barraCuatro').getContext('2d');
							var al4 = 0;
							var inicio4 = 11;
							var cw4 = ctx4.canvas.width;
							var ch4 = ctx4.canvas.height;							
        					var sim4 = setInterval (progresoDeBarra4, 30);
							var diff4;

							function progresoDeBarra4(){
								diff4 = ((al4 / 100) * Math.PI * 2 * 10).toFixed(2);
								ctx4.clearRect (0,0,cw4,ch4);
								ctx4.lineWidth = 10;
								ctx4.strokeStyle = '#24334F';
								ctx4.fillStyle = '#394E6E';
								ctx4.textAlign = 'center';
								ctx4.font = "20pt arial"
								ctx4.fillText (al4 + '%', cw4 * .5, ch4 * .5+2, cw4);
								ctx4.beginPath();
								ctx4.arc (70,70,60, inicio4, diff4/10+inicio4, false);
								ctx4.stroke();
								if (al4 >= 40){
									clearTimeout (sim4);
								}
								al4++;
							}

var ctx5 = document.getElementById ('barraCinco').getContext('2d');
							var al5 = 0;
							var inicio5 = 11;
							var cw5 = ctx5.canvas.width;
							var ch5 = ctx5.canvas.height;							
        					var sim5 = setInterval (progresoDeBarra5, 30);
							var diff5;

							function progresoDeBarra5(){
								diff5 = ((al5 / 100) * Math.PI * 2 * 10).toFixed(2);
								ctx5.clearRect (0,0,cw5,ch5);
								ctx5.lineWidth = 10;
								ctx5.strokeStyle = '#24334F';
								ctx5.fillStyle = '#394E6E';
								ctx5.textAlign = 'center';
								ctx5.font = "20pt arial"
								ctx5.fillText (al5 + '%', cw5 * .5, ch5 * .5+2, cw5);
								ctx5.beginPath();
								ctx5.arc (70,70,60, inicio5, diff5/10+inicio5, false);
								ctx5.stroke();
								if (al5 >= 40){
									clearTimeout (sim5);
								}
								al5++;
							}

var ctx6 = document.getElementById ('barraSeis').getContext('2d');
							var al6 = 0;
							var inicio6 = 11;
							var cw6 = ctx6.canvas.width;
							var ch6 = ctx6.canvas.height;							
        					var sim6 = setInterval (progresoDeBarra6, 30);
							var diff6;

							function progresoDeBarra6(){
								diff6 = ((al6 / 100) * Math.PI * 2 * 10).toFixed(2);
								ctx6.clearRect (0,0,cw6,ch6);
								ctx6.lineWidth = 10;
								ctx6.strokeStyle = '#24334F';
								ctx6.fillStyle = '#394E6E';
								ctx6.textAlign = 'center';
								ctx6.font = "20pt arial"
								ctx6.fillText (al6 + '%', cw6 * .5, ch6 * .5+2, cw6);
								ctx6.beginPath();
								ctx6.arc (70,70,60, inicio6, diff6/10+inicio6, false);
								ctx6.stroke();
								if (al6 >= 60){
									clearTimeout (sim6);
								}
								al6++;
							}
var ctx7 = document.getElementById ('barraSiete').getContext('2d');
							var al7 = 0;
							var inicio7 = 11;
							var cw7 = ctx7.canvas.width;
							var ch7 = ctx7.canvas.height;							
        					var sim7 = setInterval (progresoDeBarra7, 30);
							var diff7;

							function progresoDeBarra7(){
								diff7 = ((al7 / 100) * Math.PI * 2 * 10).toFixed(2);
								ctx7.clearRect (0,0,cw7,ch7);
								ctx7.lineWidth = 10;
								ctx7.strokeStyle = '#24334F';
								ctx7.fillStyle = '#394E6E';
								ctx7.textAlign = 'center';
								ctx7.font = "20pt arial"
								ctx7.fillText (al7 + '%', cw7 * .5, ch7 * .5+2, cw7);
								ctx7.beginPath();
								ctx7.arc (70,70,60, inicio7, diff7/10+inicio7, false);
								ctx7.stroke();
								if (al7 >= 40){
									clearTimeout (sim7);
								}
								al7++;
							}
var ctx8 = document.getElementById ('barraOcho').getContext('2d');
							var al8 = 0;
							var inicio8 = 11;
							var cw8 = ctx8.canvas.width;
							var ch8 = ctx8.canvas.height;							
        					var sim8 = setInterval (progresoDeBarra8, 30);
							var diff8;

							function progresoDeBarra8(){
								diff8 = ((al8 / 100) * Math.PI * 2 * 10).toFixed(2);
								ctx8.clearRect (0,0,cw8,ch8);
								ctx8.lineWidth = 10;
								ctx8.strokeStyle = '#24334F';
								ctx8.fillStyle = '#394E6E';
								ctx8.textAlign = 'center';
								ctx8.font = "20pt arial"
								ctx8.fillText (al8 + '%', cw8 * .5, ch8 * .5+2, cw8);
								ctx8.beginPath();
								ctx8.arc (70,70,60, inicio8, diff8/10+inicio8, false);
								ctx8.stroke();
								if (al8 >= 80){
									clearTimeout (sim8);
								}
								al8++;
							}


