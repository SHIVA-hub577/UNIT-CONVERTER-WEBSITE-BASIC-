let a = document.querySelector("#u1");
let b = document.querySelector("#b1");
let c = document.querySelector("#len");
let d = document.querySelector("#conlen");
let e = document.querySelector("#u2");
let f = document.querySelector("#b2");
let g = document.querySelector("#wei");
let h = document.querySelector("#conwei");
let i = document.querySelector("#u3");
let j = document.querySelector("#b3");
let k = document.querySelector("#temp");
let l = document.querySelector("#contemp");
let bt = document.querySelector("#br");

bt.addEventListener("click", () => {
    if (!c.value || !g.value || !k.value) {
        alert("enter a value");
    } else {
        let val = parseFloat(c.value);

        if (a.value === "meter" && b.value === "kilometer") {
            d.value = val / 1000;
        }
        if (a.value === "meter" && b.value === "meter") {
            d.value = val;
        }
        if (a.value === "kilometer" && b.value === "kilometer") {
            d.value = val;
        }
        if (a.value === "mile" && b.value === "mile") {
            d.value = val;
        }
        if (a.value === "meter" && b.value === "mile") {
            d.value = val * 0.000621371;
        }
        if (a.value === "kilometer" && b.value === "meter") {
            d.value = val * 1000;
        }
        if (a.value === "kilometer" && b.value === "mile") {
            d.value = val * 0.621371;
        }
        if (a.value === "mile" && b.value === "meter") {
            d.value = val * 1609.34;
        }
        if (a.value === "mile" && b.value === "kilometer") {
            d.value = val * 1.60934;
        }
          let w = parseFloat(g.value);


    if (e.value === "grams" && f.value === "grams") {
        h.value = w;
    }
    if (e.value === "grams" && f.value === "kilograms") {
        h.value = w / 1000;
    }
    if (e.value === "grams" && f.value === "milligrams") {
        h.value = w * 1000;
    }


    if (e.value === "kilograms" && f.value === "grams") {
        h.value = w * 1000;
    }
    if (e.value === "kilograms" && f.value === "kilograms") {
        h.value = w;
    }
    if (e.value === "kilograms" && f.value === "milligrams") {
        h.value = w * 1000000;
    }

   
    if (e.value === "milligrams" && f.value === "grams") {
        h.value = w / 1000;
    }
    if (e.value === "milligrams" && f.value === "kilograms") {
        h.value = w / 1000000;
    }
    if (e.value === "milligrams" && f.value === "milligrams") {
        h.value = w;
    }
     let t = parseFloat(k.value);


    if (i.value === "celsius" && j.value === "celsius") {
        l.value = t;
    }
    if (i.value === "celsius" && j.value === "farenheit") {
        l.value = (t * 9 / 5) + 32;
    }


    if (i.value === "farenheit" && j.value === "farenheit") {
        l.value = t;
    }
    if (i.value === "farenheit" && j.value === "celsius") {
        l.value = (t - 32) * 5 / 9;
    }
}
});
