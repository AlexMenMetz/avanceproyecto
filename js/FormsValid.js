document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formNino");

    const btnLimpiar = document.getElementById("btnLimpiar");

    if (btnLimpiar) {
        btnLimpiar.addEventListener("click", function () {
            // Confirmación para evitar borrar por accidente
            const confirmar = confirm("¿Estás seguro de que deseas borrar toda la información del formulario?");
            
            if (confirmar) {
                form.reset(); // Esto borra todos los inputs y selects automáticamente
            }
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        // Tomar valores NIÑO
        const ap1   = document.getElementById("ap1Nino");
        const ap2   = document.getElementById("ap2Nino");
        const nom   = document.getElementById("nombreNino");
        const lugar = document.getElementById("lugarNacimientoNino");
        const fecha = document.getElementById("fechaNacNino");
        const curpN = document.getElementById("curpNino"); // <--- ES EL ELEMENTO HTML
        const grupo = document.getElementById("grupo");

        // TRABAJADOR
        const ap1T = document.getElementById("Ap1T");
        const ap2T = document.getElementById("Ap2T");
        const nomT = document.getElementById("NombreT");
        const lugarT = document.getElementById("LugarNacT");
        const fechaT = document.getElementById("FechaNacT");
        const curpT = document.getElementById("CURPTra"); // <--- ES EL ELEMENTO HTML
        const correoIPN = document.getElementById("CorreoIPN");
        const correoP   = document.getElementById("CorreoP");
        const estCivil  = document.getElementById("EsCv");
        const ocupacion = document.getElementById("Ocup");
        const numEmp    = document.getElementById("NumTra");
        const escolar   = document.getElementById("Escola");
        const adscrip   = document.getElementById("Ads");
        const horario   = document.getElementById("HorarioT");

        // EXPRESIONES REGULARES
        const letrasRegex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
        const curpRegex   = /^[A-Za-z]{4}\d{6}[A-Za-z]{6}[A-Za-z0-9]{2}$/;
        const regexCorreoIPN = /^[A-Za-z0-9._%+-]+@ipn\.mx$/;
        const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

        // --- VALIDACIONES NIÑO ---

        if (!letrasRegex.test(ap1.value.trim())) {
            alert("El primer apellido (Niño) solo debe contener letras.");
            ap1.focus(); return;
        }
        if (!letrasRegex.test(ap2.value.trim())) {
            alert("El segundo apellido (Niño) solo debe contener letras.");
            ap2.focus(); return;
        }
        if (!letrasRegex.test(nom.value.trim())) {
            alert("El nombre (Niño) solo debe contener letras.");
            nom.focus(); return;
        }
        if (lugar.value.trim() === "") {
            alert("Ingresa el lugar de nacimiento (Niño).");
            lugar.focus(); return;
        }
        if (!fecha.value) {
            alert("Selecciona la fecha de nacimiento (Niño).");
            fecha.focus(); return;
        }

        // ---- CORRECCIÓN 1: Usar nombre diferente para el VALOR ----
        const valorCurpN = curpN.value.trim().toUpperCase(); 
        
        if (!curpRegex.test(valorCurpN)) {
            alert("La CURP (Niño) no es válida.");
            curpN.focus(); // Ahora sí funciona porque curpN sigue siendo el elemento
            return;
        }

        if (grupo.value === "") {
            alert("Selecciona el grupo del niño.");
            grupo.focus(); return;
        }

        // --- VALIDACIONES TRABAJADOR ---

        if (!letrasRegex.test(ap1T.value.trim())) {
            alert("El primer apellido (Trabajador) solo debe contener letras.");
            ap1T.focus(); return;
        }
        if (!letrasRegex.test(ap2T.value.trim())) {
            alert("El segundo apellido (Trabajador) solo debe contener letras.");
            ap2T.focus(); return;
        }
        if (!letrasRegex.test(nomT.value.trim())) {
            alert("El nombre (Trabajador) solo debe contener letras.");
            nomT.focus(); return;
        }
        if (lugarT.value === "") {
            alert("Selecciona el lugar de nacimiento (Trabajador).");
            lugarT.focus(); return;
        }
        if (!fechaT.value) {
            alert("Selecciona la fecha de nacimiento (Trabajador).");
            fechaT.focus(); return;
        }

        // ---- CORRECCIÓN 2 y 3: Usar variable nueva y corregir la variable en el IF ----
        const valorCurpT = curpT.value.trim().toUpperCase(); // Nueva variable
        
        if (!curpRegex.test(valorCurpT)) { // Usamos valorCurpT, NO curpValor
            alert("La CURP (Trabajador) no es válida.");
            curpT.focus();
            return;
        }

        if (!regexCorreoIPN.test(correoIPN.value.trim())) {
            alert("Ingresa un correo institucional válido (@ipn.mx).");
            correoIPN.focus(); return;
        }
        if (!regexCorreo.test(correoP.value.trim())) {
            alert("Ingresa un correo personal válido.");
            correoP.focus(); return;
        }
        if (estCivil.value === "") {
            alert("Selecciona tu estado civil.");
            estCivil.focus(); return;
        }
        if (ocupacion.value === "") {
            alert("Selecciona tu ocupación.");
            ocupacion.focus(); return;
        }
        if (numEmp.value.trim() === "" || numEmp.value.length > 7) {
            alert("Ingresa un número de empleado válido.");
            numEmp.focus(); return;
        }
        if (escolar.value === "") {
            alert("Selecciona tu escolaridad.");
            escolar.focus(); return;
        }
        if (adscrip.value === "") {
            alert("Selecciona tu adscripción.");
            adscrip.focus(); return;
        }
        if (horario.value === "") {
            alert("Selecciona tu horario de trabajo.");
            horario.focus(); return;
        }

        // Si todo está bien:
        alert("Formulario válido. Enviando...");
        // form.submit();
       

  
    });
});