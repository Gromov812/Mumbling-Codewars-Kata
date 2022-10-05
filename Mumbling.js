function accum(st) {
let arrsUp = st.toUpperCase();
let arrsLow = st.toLowerCase();
let resSt = "";
for (let el in arrsUp) {
    resSt += arrsUp[el]
   if (el != 0) resSt += arrsLow[el].repeat(el++);
    resSt += "-";
}
  return resSt.slice(0,-1);
}
