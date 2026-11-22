function formatearEdadMascota(meses) {
  if (meses === 0) return 'Recién nacido';
  if (meses < 12) return `${meses} meses`;
  const anios = Math.floor(meses / 12);
  return anios === 1 ? '1 año' : `${anios} años`;
}

function validarNombreMascota(nombre) {
  return typeof nombre === 'string' && nombre.trim().length >= 2;
}

describe('Pruebas unitarias de Patitas - Gestión de mascotas', () => {
  test('formatea edad de 0 meses como Recién nacido', () => {
    expect(formatearEdadMascota(0)).toBe('Recién nacido');
  });

  test('formatea edad menor a un año en meses', () => {
    expect(formatearEdadMascota(8)).toBe('8 meses');
  });

  test('formatea edad de 12 meses como 1 año', () => {
    expect(formatearEdadMascota(12)).toBe('1 año');
  });

  test('rechaza nombres vacíos o con solo espacios', () => {
    expect(validarNombreMascota('   ')).toBe(false);
  });

  test('acepta nombres válidos de mascotas', () => {
    expect(validarNombreMascota('Luna')).toBe(true);
  });
});
