const periodicTable = {
    "H": {
        "Z": 1,
        "A": 1
    },
    "He": {
        "Z": 2,
        "A": 4
    },
    "Li": {
        "Z": 3,
        "A": 7
    },
    "Be": {
        "Z": 4,
        "A": 9
    },
    "B": {
        "Z": 5,
        "A": 11
    },
    "C": {
        "Z": 6,
        "A": 12
    },
    "N": {
        "Z": 7,
        "A": 14
    },
    "O": {
        "Z": 8,
        "A": 16
    },
    "F": {
        "Z": 9,
        "A": 19
    },
    "Ne": {
        "Z": 10,
        "A": 20
    },
    "Na": {
        "Z": 11,
        "A": 23
    },
    "Mg": {
        "Z": 12,
        "A": 24
    },
    "Al": {
        "Z": 13,
        "A": 27
    },
    "Si": {
        "Z": 14,
        "A": 28
    },
    "P": {
        "Z": 15,
        "A": 31
    },
    "S": {
        "Z": 16,
        "A": 32
    },
    "Cl": {
        "Z": 17,
        "A": 35
    },
    "Ar": {
        "Z": 18,
        "A": 40
    },
    "K": {
        "Z": 19,
        "A": 39
    },
    "Ca": {
        "Z": 20,
        "A": 40
    },
    "Sc": {
        "Z": 21,
        "A": 45
    },
    "Ti": {
        "Z": 22,
        "A": 48
    },
    "V": {
        "Z": 23,
        "A": 51
    },
    "Cr": {
        "Z": 24,
        "A": 52
    },
    "Mn": {
        "Z": 25,
        "A": 55
    },
    "Fe": {
        "Z": 26,
        "A": 56
    },
    "Co": {
        "Z": 27,
        "A": 59
    },
    "Ni": {
        "Z": 28,
        "A": 59
    },
    "Cu": {
        "Z": 29,
        "A": 64
    },
    "Zn": {
        "Z": 30,
        "A": 65
    },
    "Ga": {
        "Z": 31,
        "A": 70
    },
    "Ge": {
        "Z": 32,
        "A": 73
    },
    "As": {
        "Z": 33,
        "A": 75
    },
    "Se": {
        "Z": 34,
        "A": 79
    },
    "Br": {
        "Z": 35,
        "A": 80
    },
    "Kr": {
        "Z": 36,
        "A": 84
    },
    "Rb": {
        "Z": 37,
        "A": 85
    },
    "Sr": {
        "Z": 38,
        "A": 88
    },
    "Y": {
        "Z": 39,
        "A": 89
    },
    "Zr": {
        "Z": 40,
        "A": 91
    },
    "Nb": {
        "Z": 41,
        "A": 93
    },
    "Mo": {
        "Z": 42,
        "A": 96
    },
    "Tc": {
        "Z": 43,
        "A": 99
    },
    "Ru": {
        "Z": 44,
        "A": 101
    },
    "Rh": {
        "Z": 45,
        "A": 103
    },
    "Pd": {
        "Z": 46,
        "A": 106
    },
    "Ag": {
        "Z": 47,
        "A": 108
    },
    "Cd": {
        "Z": 48,
        "A": 112
    },
    "In": {
        "Z": 49,
        "A": 115
    },
    "Sn": {
        "Z": 50,
        "A": 119
    },
    "Sb": {
        "Z": 51,
        "A": 122
    },
    "Te": {
        "Z": 52,
        "A": 128
    },
    "I": {
        "Z": 53,
        "A": 127
    },
    "Xe": {
        "Z": 54,
        "A": 131
    },
    "Cs": {
        "Z": 55,
        "A": 133
    },
    "Ba": {
        "Z": 56,
        "A": 137
    },
    "La": {
        "Z": 57,
        "A": 139
    },
    "Ce": {
        "Z": 58,
        "A": 140
    },
    "Pr": {
        "Z": 59,
        "A": 141
    },
    "Nd": {
        "Z": 60,
        "A": 144
    },
    "Pm": {
        "Z": 61,
        "A": 147
    },
    "Sm": {
        "Z": 62,
        "A": 150
    },
    "Eu": {
        "Z": 63,
        "A": 152
    },
    "Gd": {
        "Z": 64,
        "A": 157
    },
    "Tb": {
        "Z": 65,
        "A": 159
    },
    "Dy": {
        "Z": 66,
        "A": 163
    },
    "Ho": {
        "Z": 67,
        "A": 165
    },
    "Er": {
        "Z": 68,
        "A": 167
    },
    "Tm": {
        "Z": 69,
        "A": 169
    },
    "Yb": {
        "Z": 70,
        "A": 173
    },
    "Lu": {
        "Z": 71,
        "A": 175
    },
    "Hf": {
        "Z": 72,
        "A": 178
    },
    "Ta": {
        "Z": 73,
        "A": 181
    },
    "W": {
        "Z": 74,
        "A": 184
    },
    "Re": {
        "Z": 75,
        "A": 186
    },
    "Os": {
        "Z": 76,
        "A": 190
    },
    "Ir": {
        "Z": 77,
        "A": 192
    },
    "Pt": {
        "Z": 78,
        "A": 195
    },
    "Au": {
        "Z": 79,
        "A": 197
    },
    "Hg": {
        "Z": 80,
        "A": 201
    },
    "Tl": {
        "Z": 81,
        "A": 204
    },
    "Pb": {
        "Z": 82,
        "A": 207
    },
    "Bi": {
        "Z": 83,
        "A": 209
    },
    "Po": {
        "Z": 84,
        "A": 209
    },
    "At": {
        "Z": 85,
        "A": 210
    },
    "Rn": {
        "Z": 86,
        "A": 222
    },
    "Fr": {
        "Z": 87,
        "A": 223
    },
    "Ra": {
        "Z": 88,
        "A": 226
    },
    "Ac": {
        "Z": 89,
        "A": 227
    },
    "Th": {
        "Z": 90,
        "A": 232
    },
    "Pa": {
        "Z": 91,
        "A": 231
    },
    "U": {
        "Z": 92,
        "A": 238
    },
    "Np": {
        "Z": 93,
        "A": 237
    },
    "Pu": {
        "Z": 94,
        "A": 244
    },
    "Am": {
        "Z": 95,
        "A": 243
    },
    "Cm": {
        "Z": 96,
        "A": 247
    },
    "Bk": {
        "Z": 97,
        "A": 247
    },
    "Cf": {
        "Z": 98,
        "A": 251
    },
    "Es": {
        "Z": 99,
        "A": 252
    },
    "Fm": {
        "Z": 100,
        "A": 257
    },
    "Md": {
        "Z": 101,
        "A": 258
    },
    "No": {
        "Z": 102,
        "A": 259
    },
    "Lr": {
        "Z": 103,
        "A": 262
    },
    "Rf": {
        "Z": 104,
        "A": 267
    },
    "Db": {
        "Z": 105,
        "A": 268
    },
    "Sg": {
        "Z": 106,
        "A": 271
    },
    "Bh": {
        "Z": 107,
        "A": 270
    },
    "Hs": {
        "Z": 108,
        "A": 269
    },
    "Mt": {
        "Z": 109,
        "A": 278
    },
    "Ds": {
        "Z": 110,
        "A": 281
    },
    "Rg": {
        "Z": 111,
        "A": 281
    },
    "Cn": {
        "Z": 112,
        "A": 285
    },
    "Uut": {
        "Z": 113,
        "A": 284
    },
    "Fl": {
        "Z": 114,
        "A": 289
    },
    "Uup": {
        "Z": 115,
        "A": 289
    },
    "Lv": {
        "Z": 116,
        "A": 292
    },
    "Uus": {
        "Z": 117,
        "A": 294
    },
    "Og": {
        "Z": 118,
        "A": 294
    },
    "Uuo": {
        "Z": 1118,
        "A": 294
    }
}