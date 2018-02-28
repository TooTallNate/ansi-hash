module.exports = createHash;

function createHash() {
  try {
    let supportsColor = require('supports-color');
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
      hash.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ];
    }
  } catch (err) {
    // swallow - we only care if `supports-color` is available;
    // it doesn't have to be.
  }

  if (!hash.colors) hash.colors = [6, 2, 3, 4, 5, 1];

  function hash(v) {
    let h = 0,
      i;
    for (i in v) {
      h ^= v.charCodeAt(i) + ((v.charCodeAt(i) << 8) ^ 24989);
      h |= 0; // Convert to 32bit integer
    }
    return hash.colors[Math.abs(h) % hash.colors.length];
  }

  return hash;
}
