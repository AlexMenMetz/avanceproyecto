function validarTexto() {
    // 1. Obtener el elemento input
    const input = document.getElementById('apellidoInput');
    
    // 2. Obtener el valor y quitar espacios al inicio/final
    const valor = input.value.trim();

    // 3. Definir expresión regular (Solo letras, acentos y espacios)
    const regex = /^[a-zA-Z\u00C0-\u017F\s]+$/;

    // 4. Lógica de validación
    // Si está vacío O no cumple con la expresión regular (contiene números o símbolos)
    if (valor === "" || !regex.test(valor)) {
        input.classList.remove('is-valid'); // Quitar verde
        input.classList.add('is-invalid');  // Poner rojo
    } else {
        input.classList.remove('is-invalid'); // Quitar rojo
        input.classList.add('is-valid');      // Poner verde
    }
}
function validarCURP() {
    const curpInput = document.getElementById('curpInput');
    const curp = curpInput.value.toUpperCase(); // Asegurar mayúsculas
    const feedbackDiv = curpInput.nextElementSibling; // Para manipular clases si quieres

    // Expresión regular oficial para el formato del CURP
    // 4 letras + 6 números (fecha) + H/M + 2 letras (estado) + 3 consonantes + 1 alfanumérico + 1 número
    const regexCURP = /^[A-Z]{4}\d{6}[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[A-Z0-9]\d$/;

    if (regexCURP.test(curp)) {
        // Es válido
        curpInput.classList.remove('is-invalid');
        curpInput.classList.add('is-valid');
        console.log("CURP Válido");
        return true;
    } else {
        // No es válido
        curpInput.classList.remove('is-valid');
        curpInput.classList.add('is-invalid');
        console.log("CURP Inválido");
        return false;
    }
}
function validarCorreoIPN() {
    const inputCorreo = document.getElementById('correoIPN');
    const correo = inputCorreo.value.toLowerCase().trim(); // Convertir a minúsculas y quitar espacios extra
    
    // Expresión regular:
    // ^[a-zA-Z0-9._%+-]+  -> Acepta letras, números, puntos, guiones antes del @
    // @alumno\.ipn\.mx$   -> Obliga a que termine EXACTAMENTE en ese dominio
    const regexIPN = /^[a-zA-Z0-9._%+-]+@alumno\.ipn\.mx$/;

    if (regexIPN.test(correo)) {
        // Es válido
        inputCorreo.classList.remove('is-invalid');
        inputCorreo.classList.add('is-valid');
        console.log("Correo IPN correcto");
        return true;
    } else {
        // No es válido (o es de otro dominio como gmail/hotmail)
        inputCorreo.classList.remove('is-valid');
        inputCorreo.classList.add('is-invalid');
        console.log("Error: Se requiere dominio @alumno.ipn.mx");
        return false;
    }
}