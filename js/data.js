/* ShopWare - data.js: catálogo. Para agregar un producto copia un bloque de PRODUCTOS y cambia sus datos. */
window.SW = window.SW || {};
SW.data = {
 "FAMILIAS": [
  {
   "slug": "mouse",
   "nombre": "Mouse",
   "cat": "perifericos",
   "desc": "Precisión y control para jugar y trabajar."
  },
  {
   "slug": "teclados",
   "nombre": "Teclados",
   "cat": "perifericos",
   "desc": "Teclados mecánicos para cada estilo de juego."
  },
  {
   "slug": "monitores",
   "nombre": "Monitores",
   "cat": "perifericos",
   "desc": "Pantallas Full HD y QHD con alta tasa de refresco."
  },
  {
   "slug": "audifonos",
   "nombre": "Audífonos",
   "cat": "perifericos",
   "desc": "Sonido envolvente, con cable o inalámbricos."
  },
  {
   "slug": "parlantes",
   "nombre": "Parlantes",
   "cat": "perifericos",
   "desc": "Audio para tu escritorio, del básico al de estudio."
  },
  {
   "slug": "webcams",
   "nombre": "Webcams",
   "cat": "perifericos",
   "desc": "Videollamadas y streaming en HD y Full HD."
  },
  {
   "slug": "microfonos",
   "nombre": "Micrófonos",
   "cat": "perifericos",
   "desc": "Voz clara para streaming, juegos y reuniones."
  },
  {
   "slug": "mousepads",
   "nombre": "Mousepads",
   "cat": "perifericos",
   "desc": "Superficies para un deslizamiento preciso."
  },
  {
   "slug": "gamepads",
   "nombre": "Gamepads",
   "cat": "perifericos",
   "desc": "Mandos inalámbricos para PC y consolas."
  },
  {
   "slug": "tarjetas-de-video",
   "nombre": "Tarjetas de video",
   "cat": "componentes",
   "desc": "Potencia gráfica para juegos y creación de contenido."
  },
  {
   "slug": "procesadores",
   "nombre": "Procesadores",
   "cat": "componentes",
   "desc": "El cerebro de tu PC, para gaming y productividad."
  },
  {
   "slug": "memoria-ram",
   "nombre": "Memoria RAM",
   "cat": "componentes",
   "desc": "Módulos DDR4 y DDR5 para multitarea sin esperas."
  },
  {
   "slug": "almacenamiento",
   "nombre": "Almacenamiento",
   "cat": "componentes",
   "desc": "SSD y discos duros para tus juegos y archivos."
  },
  {
   "slug": "placas-madre",
   "nombre": "Placas madre",
   "cat": "componentes",
   "desc": "La base de tu armado, para AMD e Intel."
  },
  {
   "slug": "fuentes-de-poder",
   "nombre": "Fuentes de poder",
   "cat": "componentes",
   "desc": "Energía estable y eficiente para tu equipo."
  },
  {
   "slug": "gabinetes",
   "nombre": "Gabinetes",
   "cat": "componentes",
   "desc": "Cajas con buen flujo de aire y estilo."
  },
  {
   "slug": "refrigeracion-liquida",
   "nombre": "Refrigeración líquida",
   "cat": "componentes",
   "desc": "Kits AIO para mantener fresco tu procesador."
  },
  {
   "slug": "disipadores",
   "nombre": "Disipadores",
   "cat": "componentes",
   "desc": "Refrigeración por aire de alto rendimiento."
  },
  {
   "slug": "ventiladores",
   "nombre": "Ventiladores",
   "cat": "componentes",
   "desc": "Ventiladores para gabinete: silencio y flujo de aire."
  }
 ],
 "PRODUCTOS": [
  {
   "id": "mouse",
   "nombre": "Mouse Gamer RGB",
   "marca": "Genérica",
   "familia": "mouse",
   "precio": 89,
   "oferta": 0,
   "img": "imágenes/mouse.jpeg",
   "alt": "Mouse gamer con iluminación RGB",
   "desc": "Mouse óptico con 7 botones programables e iluminación RGB personalizable.",
   "specs": [
    [
     "Sensor",
     "Óptico, 16,000 DPI"
    ],
    [
     "Botones",
     "7 programables"
    ],
    [
     "Conexión",
     "USB con cable trenzado"
    ],
    [
     "Iluminación",
     "RGB personalizable"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "RGB",
    "Cableado"
   ],
   "familiaNombre": "Mouse",
   "cat": "perifericos",
   "ruta": "categorias/mouse.html"
  },
  {
   "id": "g203",
   "nombre": "Logitech G203 Lightsync",
   "marca": "Logitech",
   "familia": "mouse",
   "precio": 99,
   "oferta": 0,
   "img": "imágenes/g203.jpg",
   "alt": "Mouse gamer Logitech G203 Lightsync con iluminación RGB",
   "desc": "Mouse gamer con sensor de 8,000 DPI e iluminación RGB Lightsync.",
   "specs": [
    [
     "Sensor",
     "8,000 DPI"
    ],
    [
     "Botones",
     "6 programables"
    ],
    [
     "Iluminación",
     "RGB Lightsync"
    ],
    [
     "Conexión",
     "USB con cable"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "RGB",
    "Cableado"
   ],
   "familiaNombre": "Mouse",
   "cat": "perifericos",
   "ruta": "categorias/mouse.html"
  },
  {
   "id": "g502",
   "nombre": "Logitech G502 Hero",
   "marca": "Logitech",
   "familia": "mouse",
   "precio": 289,
   "oferta": 10,
   "img": "imágenes/g502.jpg",
   "alt": "Mouse gamer Logitech G502 Hero con botones laterales",
   "desc": "Mouse de alto rendimiento con sensor HERO y 11 botones programables.",
   "specs": [
    [
     "Sensor",
     "HERO 25,600 DPI"
    ],
    [
     "Botones",
     "11 programables"
    ],
    [
     "Peso",
     "Ajustable con pesas"
    ],
    [
     "Conexión",
     "USB con cable"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "RGB",
    "Cableado"
   ],
   "familiaNombre": "Mouse",
   "cat": "perifericos",
   "ruta": "categorias/mouse.html"
  },
  {
   "id": "teclado",
   "nombre": "Teclado Mecánico",
   "marca": "Genérica",
   "familia": "teclados",
   "precio": 159,
   "oferta": 10,
   "img": "imágenes/teclado_mecánico.jpeg",
   "alt": "Teclado mecánico para gaming",
   "desc": "Teclado mecánico con RGB por tecla y N-Key Rollover completo.",
   "specs": [
    [
     "Switches",
     "Mecánicos (Red / Blue)"
    ],
    [
     "Iluminación",
     "RGB por tecla"
    ],
    [
     "Conexión",
     "USB Tipo-C desmontable"
    ],
    [
     "Anti-Ghosting",
     "N-Key Rollover completo"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "RGB",
    "Mecánico",
    "USB-C"
   ],
   "familiaNombre": "Teclados",
   "cat": "perifericos",
   "ruta": "categorias/teclados.html"
  },
  {
   "id": "k552",
   "nombre": "Redragon Kumara K552 RGB",
   "marca": "Redragon",
   "familia": "teclados",
   "precio": 169,
   "oferta": 0,
   "img": "imágenes/k552.jpg",
   "alt": "Teclado mecánico Redragon Kumara K552 RGB formato compacto",
   "desc": "Teclado mecánico compacto sin teclado numérico, con iluminación RGB.",
   "specs": [
    [
     "Formato",
     "TKL, 87 teclas"
    ],
    [
     "Switches",
     "Mecánicos Outemu"
    ],
    [
     "Iluminación",
     "RGB"
    ],
    [
     "Conexión",
     "USB"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "RGB",
    "Mecánico",
    "TKL"
   ],
   "familiaNombre": "Teclados",
   "cat": "perifericos",
   "ruta": "categorias/teclados.html"
  },
  {
   "id": "alloyorigins",
   "nombre": "HyperX Alloy Origins Core",
   "marca": "HyperX",
   "familia": "teclados",
   "precio": 349,
   "oferta": 0,
   "img": "imágenes/alloyorigins.jpg",
   "alt": "Teclado mecánico HyperX Alloy Origins Core con estructura de aluminio",
   "desc": "Teclado mecánico compacto con estructura de aluminio y RGB por tecla.",
   "specs": [
    [
     "Formato",
     "TKL, 87 teclas"
    ],
    [
     "Switches",
     "HyperX Red lineales"
    ],
    [
     "Iluminación",
     "RGB por tecla"
    ],
    [
     "Conexión",
     "USB-C desmontable"
    ],
    [
     "Estructura",
     "Aluminio"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "RGB",
    "Mecánico",
    "TKL",
    "USB-C"
   ],
   "familiaNombre": "Teclados",
   "cat": "perifericos",
   "ruta": "categorias/teclados.html"
  },
  {
   "id": "monitor",
   "nombre": "Monitor 24\" Full HD",
   "marca": "Genérica",
   "familia": "monitores",
   "precio": 599,
   "oferta": 0,
   "img": "imágenes/monitor.png",
   "alt": "Monitor de 24 pulgadas Full HD",
   "desc": "Monitor Full HD de 24 pulgadas con 165Hz de tasa de refresco.",
   "specs": [
    [
     "Tamaño",
     "24 pulgadas"
    ],
    [
     "Resolución",
     "1920 x 1080 (Full HD)"
    ],
    [
     "Tasa de refresco",
     "165Hz"
    ],
    [
     "Tiempo de respuesta",
     "1ms (MPRT)"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Full HD",
    "165Hz"
   ],
   "familiaNombre": "Monitores",
   "cat": "perifericos",
   "ruta": "categorias/monitores.html"
  },
  {
   "id": "lg24gn600",
   "nombre": "LG UltraGear 24GN600-B",
   "marca": "LG",
   "familia": "monitores",
   "precio": 699,
   "oferta": 0,
   "img": "imágenes/lg24gn600.jpg",
   "alt": "Monitor gamer LG UltraGear 24GN600-B de 24 pulgadas",
   "desc": "Monitor IPS Full HD de 24 pulgadas con 144Hz y 1ms de respuesta.",
   "specs": [
    [
     "Tamaño",
     "23.8 pulgadas"
    ],
    [
     "Panel",
     "IPS Full HD"
    ],
    [
     "Tasa de refresco",
     "144Hz"
    ],
    [
     "Tiempo de respuesta",
     "1ms (GtG)"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Full HD",
    "144Hz",
    "IPS"
   ],
   "familiaNombre": "Monitores",
   "cat": "perifericos",
   "ruta": "categorias/monitores.html"
  },
  {
   "id": "odysseyg5",
   "nombre": "Samsung Odyssey G5 27\"",
   "marca": "Samsung",
   "familia": "monitores",
   "precio": 1099,
   "oferta": 0,
   "img": "imágenes/odysseyg5.jpg",
   "alt": "Monitor curvo Samsung Odyssey G5 de 27 pulgadas QHD",
   "desc": "Monitor curvo QHD de 27 pulgadas con 144Hz para jugar con inmersión.",
   "specs": [
    [
     "Tamaño",
     "27 pulgadas"
    ],
    [
     "Resolución",
     "2560 x 1440 (QHD)"
    ],
    [
     "Tasa de refresco",
     "144Hz"
    ],
    [
     "Curvatura",
     "1000R"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "QHD",
    "144Hz",
    "Curvo"
   ],
   "familiaNombre": "Monitores",
   "cat": "perifericos",
   "ruta": "categorias/monitores.html"
  },
  {
   "id": "audifonos",
   "nombre": "Audífonos Gamer",
   "marca": "Razer",
   "familia": "audifonos",
   "precio": 129,
   "oferta": 0,
   "img": "imágenes/audifono_Razer_kraken_V4.jpeg",
   "alt": "Audífonos gamer Razer Kraken V4",
   "desc": "Audífonos con sonido envolvente 7.1 virtual y micrófono retráctil.",
   "specs": [
    [
     "Sonido",
     "Surround 7.1 Virtual"
    ],
    [
     "Conectividad",
     "USB / Jack 3.5mm"
    ],
    [
     "Micrófono",
     "Bidireccional retráctil"
    ],
    [
     "Iluminación",
     "RGB"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "RGB",
    "Micrófono",
    "USB"
   ],
   "familiaNombre": "Audífonos",
   "cat": "perifericos",
   "ruta": "categorias/audifonos.html"
  },
  {
   "id": "cloud2",
   "nombre": "HyperX Cloud II",
   "marca": "HyperX",
   "familia": "audifonos",
   "precio": 399,
   "oferta": 15,
   "img": "imágenes/cloud2.jpg",
   "alt": "Audífonos gamer HyperX Cloud II con micrófono desmontable",
   "desc": "Audífonos con sonido envolvente 7.1 virtual y micrófono desmontable.",
   "specs": [
    [
     "Sonido",
     "Surround 7.1 virtual (USB)"
    ],
    [
     "Drivers",
     "53 mm"
    ],
    [
     "Micrófono",
     "Desmontable con cancelación de ruido"
    ],
    [
     "Conectividad",
     "USB / Jack 3.5mm"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Micrófono",
    "USB",
    "7.1"
   ],
   "familiaNombre": "Audífonos",
   "cat": "perifericos",
   "ruta": "categorias/audifonos.html"
  },
  {
   "id": "g435",
   "nombre": "Logitech G435 Lightspeed",
   "marca": "Logitech",
   "familia": "audifonos",
   "precio": 249,
   "oferta": 0,
   "img": "imágenes/g435.jpg",
   "alt": "Audífonos inalámbricos Logitech G435 Lightspeed",
   "desc": "Audífonos inalámbricos livianos con Lightspeed y Bluetooth.",
   "specs": [
    [
     "Conectividad",
     "Lightspeed y Bluetooth"
    ],
    [
     "Peso",
     "165 g"
    ],
    [
     "Autonomía",
     "Hasta 18 horas"
    ],
    [
     "Micrófono",
     "Doble integrado"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Inalámbrico",
    "Micrófono"
   ],
   "familiaNombre": "Audífonos",
   "cat": "perifericos",
   "ruta": "categorias/audifonos.html"
  },
  {
   "id": "parlantes",
   "nombre": "Parlantes para PC",
   "marca": "Genérica",
   "familia": "parlantes",
   "precio": 79,
   "oferta": 0,
   "img": "imágenes/parlantes_pc.jpeg",
   "alt": "Par de parlantes de escritorio para PC",
   "desc": "Parlantes con luz LED RGB ambiental y control de volumen frontal.",
   "specs": [
    [
     "Potencia",
     "RMS 6W"
    ],
    [
     "Conectividad",
     "Auxiliar 3.5mm y USB (Energía)"
    ],
    [
     "Iluminación",
     "LED RGB ambiental"
    ],
    [
     "Control",
     "Control de volumen frontal"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "RGB",
    "USB"
   ],
   "familiaNombre": "Parlantes",
   "cat": "perifericos",
   "ruta": "categorias/parlantes.html"
  },
  {
   "id": "z313",
   "nombre": "Logitech Z313",
   "marca": "Logitech",
   "familia": "parlantes",
   "precio": 219,
   "oferta": 0,
   "img": "imágenes/z313.jpg",
   "alt": "Sistema de parlantes 2.1 Logitech Z313 con subwoofer",
   "desc": "Sistema 2.1 con subwoofer para música, series y juegos.",
   "specs": [
    [
     "Sistema",
     "2.1 con subwoofer"
    ],
    [
     "Potencia",
     "25 W RMS (50 W pico)"
    ],
    [
     "Conexión",
     "Jack 3.5 mm"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "2.1",
    "Subwoofer"
   ],
   "familiaNombre": "Parlantes",
   "cat": "perifericos",
   "ruta": "categorias/parlantes.html"
  },
  {
   "id": "r1280db",
   "nombre": "Edifier R1280DB",
   "marca": "Edifier",
   "familia": "parlantes",
   "precio": 449,
   "oferta": 0,
   "img": "imágenes/r1280db.jpg",
   "alt": "Parlantes de estudio Edifier R1280DB con Bluetooth",
   "desc": "Monitores activos 2.0 con Bluetooth y control remoto.",
   "specs": [
    [
     "Sistema",
     "2.0 monitores activos"
    ],
    [
     "Potencia",
     "42 W RMS"
    ],
    [
     "Conectividad",
     "Bluetooth, óptica, coaxial y RCA"
    ],
    [
     "Control",
     "Remoto inalámbrico"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Bluetooth",
    "2.0"
   ],
   "familiaNombre": "Parlantes",
   "cat": "perifericos",
   "ruta": "categorias/parlantes.html"
  },
  {
   "id": "webcam",
   "nombre": "Webcam Full HD",
   "marca": "Genérica",
   "familia": "webcams",
   "precio": 99,
   "oferta": 0,
   "img": "imágenes/webcam.jpeg",
   "alt": "Webcam Full HD para videollamadas y streaming",
   "desc": "Webcam 1080p con enfoque automático y micrófono estéreo.",
   "specs": [
    [
     "Resolución",
     "1080p a 30fps"
    ],
    [
     "Enfoque",
     "Automático"
    ],
    [
     "Micrófono",
     "Estéreo incorporado"
    ],
    [
     "Conexión",
     "Plug & Play USB"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Full HD",
    "Micrófono",
    "USB"
   ],
   "familiaNombre": "Webcams",
   "cat": "perifericos",
   "ruta": "categorias/webcams.html"
  },
  {
   "id": "c920",
   "nombre": "Logitech C920 HD Pro",
   "marca": "Logitech",
   "familia": "webcams",
   "precio": 329,
   "oferta": 0,
   "img": "imágenes/c920.jpg",
   "alt": "Webcam Logitech C920 HD Pro Full HD",
   "desc": "Webcam Full HD con enfoque automático y micrófonos estéreo.",
   "specs": [
    [
     "Resolución",
     "1080p a 30 fps"
    ],
    [
     "Enfoque",
     "Automático"
    ],
    [
     "Micrófono",
     "Estéreo dual"
    ],
    [
     "Conexión",
     "USB"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Full HD",
    "Micrófono",
    "USB"
   ],
   "familiaNombre": "Webcams",
   "cat": "perifericos",
   "ruta": "categorias/webcams.html"
  },
  {
   "id": "c270",
   "nombre": "Logitech C270 HD",
   "marca": "Logitech",
   "familia": "webcams",
   "precio": 119,
   "oferta": 0,
   "img": "imágenes/c270.jpg",
   "alt": "Webcam Logitech C270 HD de 720p",
   "desc": "Webcam HD sencilla para clases y reuniones en línea.",
   "specs": [
    [
     "Resolución",
     "720p a 30 fps"
    ],
    [
     "Enfoque",
     "Fijo"
    ],
    [
     "Micrófono",
     "Mono incorporado"
    ],
    [
     "Conexión",
     "USB"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "HD",
    "Micrófono",
    "USB"
   ],
   "familiaNombre": "Webcams",
   "cat": "perifericos",
   "ruta": "categorias/webcams.html"
  },
  {
   "id": "solocast",
   "nombre": "HyperX SoloCast",
   "marca": "HyperX",
   "familia": "microfonos",
   "precio": 249,
   "oferta": 0,
   "img": "imágenes/solocast.jpg",
   "alt": "Micrófono de condensador USB HyperX SoloCast",
   "desc": "Micrófono USB de condensador con silencio táctil.",
   "specs": [
    [
     "Tipo",
     "Condensador USB"
    ],
    [
     "Patrón",
     "Cardioide"
    ],
    [
     "Resolución",
     "24-bit / 96 kHz"
    ],
    [
     "Extra",
     "Silencio con un toque"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "USB",
    "Cardioide"
   ],
   "familiaNombre": "Micrófonos",
   "cat": "perifericos",
   "ruta": "categorias/microfonos.html"
  },
  {
   "id": "k669b",
   "nombre": "Fifine K669B",
   "marca": "Fifine",
   "familia": "microfonos",
   "precio": 129,
   "oferta": 0,
   "img": "imágenes/k669b.jpg",
   "alt": "Micrófono de condensador USB Fifine K669B con base de mesa",
   "desc": "Micrófono USB económico, listo para usar con base de mesa.",
   "specs": [
    [
     "Tipo",
     "Condensador USB"
    ],
    [
     "Patrón",
     "Cardioide"
    ],
    [
     "Instalación",
     "Plug & Play"
    ],
    [
     "Incluye",
     "Base de mesa"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "USB",
    "Cardioide"
   ],
   "familiaNombre": "Micrófonos",
   "cat": "perifericos",
   "ruta": "categorias/microfonos.html"
  },
  {
   "id": "yeti",
   "nombre": "Blue Yeti",
   "marca": "Blue",
   "familia": "microfonos",
   "precio": 549,
   "oferta": 0,
   "img": "imágenes/yeti.jpg",
   "alt": "Micrófono USB Blue Yeti de tres cápsulas",
   "desc": "Micrófono USB de tres cápsulas con cuatro patrones de captación.",
   "specs": [
    [
     "Tipo",
     "Condensador USB"
    ],
    [
     "Cápsulas",
     "3"
    ],
    [
     "Patrones",
     "4 (cardioide, estéreo, omni, bidireccional)"
    ],
    [
     "Respuesta",
     "20 Hz - 20 kHz"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "USB",
    "Multipatrón"
   ],
   "familiaNombre": "Micrófonos",
   "cat": "perifericos",
   "ruta": "categorias/microfonos.html"
  },
  {
   "id": "g240",
   "nombre": "Logitech G240",
   "marca": "Logitech",
   "familia": "mousepads",
   "precio": 69,
   "oferta": 0,
   "img": "imágenes/g240.jpg",
   "alt": "Mousepad de tela Logitech G240",
   "desc": "Mousepad de tela de baja fricción para sensibilidades altas.",
   "specs": [
    [
     "Tamaño",
     "340 x 280 mm"
    ],
    [
     "Grosor",
     "1 mm"
    ],
    [
     "Superficie",
     "Tela de baja fricción"
    ],
    [
     "Base",
     "Goma antideslizante"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Tela",
    "Mediano"
   ],
   "familiaNombre": "Mousepads",
   "cat": "perifericos",
   "ruta": "categorias/mousepads.html"
  },
  {
   "id": "gigantus",
   "nombre": "Razer Gigantus V2 Medium",
   "marca": "Razer",
   "familia": "mousepads",
   "precio": 79,
   "oferta": 0,
   "img": "imágenes/gigantus.jpg",
   "alt": "Mousepad Razer Gigantus V2 Medium de tela",
   "desc": "Mousepad de tela microtexturizada con base antideslizante.",
   "specs": [
    [
     "Tamaño",
     "360 x 275 mm"
    ],
    [
     "Grosor",
     "3 mm"
    ],
    [
     "Superficie",
     "Tela microtexturizada"
    ],
    [
     "Base",
     "Goma antideslizante"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Tela",
    "Mediano"
   ],
   "familiaNombre": "Mousepads",
   "cat": "perifericos",
   "ruta": "categorias/mousepads.html"
  },
  {
   "id": "goliathus",
   "nombre": "Razer Goliathus Extended Chroma",
   "marca": "Razer",
   "familia": "mousepads",
   "precio": 349,
   "oferta": 0,
   "img": "imágenes/goliathus.jpg",
   "alt": "Mousepad extendido Razer Goliathus Extended Chroma con luz RGB",
   "desc": "Mousepad extendido con iluminación RGB Chroma en el borde.",
   "specs": [
    [
     "Tamaño",
     "920 x 294 mm"
    ],
    [
     "Grosor",
     "3 mm"
    ],
    [
     "Iluminación",
     "RGB Chroma"
    ],
    [
     "Conexión",
     "USB"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "RGB",
    "Extendido"
   ],
   "familiaNombre": "Mousepads",
   "cat": "perifericos",
   "ruta": "categorias/mousepads.html"
  },
  {
   "id": "xboxctrl",
   "nombre": "Control Inalámbrico Xbox",
   "marca": "Microsoft",
   "familia": "gamepads",
   "precio": 279,
   "oferta": 0,
   "img": "imágenes/xboxctrl.jpg",
   "alt": "Control inalámbrico Xbox para PC",
   "desc": "Control inalámbrico compatible con PC, Xbox y dispositivos móviles.",
   "specs": [
    [
     "Conectividad",
     "Bluetooth y USB-C"
    ],
    [
     "Compatibilidad",
     "PC, Xbox y móviles"
    ],
    [
     "Gatillos",
     "Con agarre texturizado"
    ],
    [
     "Alimentación",
     "2 pilas AA"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Inalámbrico",
    "Bluetooth"
   ],
   "familiaNombre": "Gamepads",
   "cat": "perifericos",
   "ruta": "categorias/gamepads.html"
  },
  {
   "id": "dualsense",
   "nombre": "Sony DualSense",
   "marca": "Sony",
   "familia": "gamepads",
   "precio": 299,
   "oferta": 0,
   "img": "imágenes/dualsense.jpg",
   "alt": "Control Sony DualSense inalámbrico",
   "desc": "Control con respuesta háptica y gatillos adaptativos.",
   "specs": [
    [
     "Conectividad",
     "Bluetooth y USB-C"
    ],
    [
     "Retroalimentación",
     "Háptica"
    ],
    [
     "Gatillos",
     "Adaptativos"
    ],
    [
     "Batería",
     "Recargable"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Inalámbrico",
    "Bluetooth",
    "Recargable"
   ],
   "familiaNombre": "Gamepads",
   "cat": "perifericos",
   "ruta": "categorias/gamepads.html"
  },
  {
   "id": "8bitdopro2",
   "nombre": "8BitDo Pro 2",
   "marca": "8BitDo",
   "familia": "gamepads",
   "precio": 249,
   "oferta": 0,
   "img": "imágenes/8bitdopro2.jpg",
   "alt": "Control 8BitDo Pro 2 con Bluetooth",
   "desc": "Control versátil con botones traseros programables.",
   "specs": [
    [
     "Conectividad",
     "Bluetooth y USB-C"
    ],
    [
     "Batería",
     "Recargable 1000 mAh"
    ],
    [
     "Botones",
     "2 traseros programables"
    ],
    [
     "Compatibilidad",
     "PC, Switch y Android"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Bluetooth",
    "Recargable"
   ],
   "familiaNombre": "Gamepads",
   "cat": "perifericos",
   "ruta": "categorias/gamepads.html"
  },
  {
   "id": "rtx4070",
   "nombre": "Tarjeta de Video RTX 4070",
   "marca": "Gigabyte",
   "familia": "tarjetas-de-video",
   "precio": 2499,
   "oferta": 15,
   "img": "imágenes/GPU_RTX_4070gigabyte.jpeg",
   "alt": "Tarjeta de video NVIDIA RTX 4070 de Gigabyte",
   "desc": "Tarjeta gráfica Gigabyte con 12GB GDDR6X para juegos y creación de contenido.",
   "specs": [
    [
     "Marca",
     "Gigabyte"
    ],
    [
     "Modelo",
     "RTX 4070 Windforce OC"
    ],
    [
     "Memoria",
     "12GB GDDR6X"
    ],
    [
     "Núcleos CUDA",
     "5888"
    ],
    [
     "Consumo",
     "200W"
    ],
    [
     "Conector de poder",
     "1x 12VHPWR"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "12 GB",
    "GDDR6X"
   ],
   "familiaNombre": "Tarjetas de video",
   "cat": "componentes",
   "ruta": "categorias/tarjetas-de-video.html"
  },
  {
   "id": "rtx4060",
   "nombre": "MSI GeForce RTX 4060 Ventus 2X",
   "marca": "MSI",
   "familia": "tarjetas-de-video",
   "precio": 1299,
   "oferta": 0,
   "img": "imágenes/rtx4060.jpg",
   "alt": "Tarjeta de video MSI GeForce RTX 4060 Ventus 2X con dos ventiladores",
   "desc": "Tarjeta gráfica para jugar en Full HD con trazado de rayos y DLSS.",
   "specs": [
    [
     "Memoria",
     "8GB GDDR6"
    ],
    [
     "Bus",
     "128 bits"
    ],
    [
     "Ventiladores",
     "2"
    ],
    [
     "Conector de poder",
     "1x 8 pines"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "8 GB",
    "GDDR6"
   ],
   "familiaNombre": "Tarjetas de video",
   "cat": "componentes",
   "ruta": "categorias/tarjetas-de-video.html"
  },
  {
   "id": "rtx4070super",
   "nombre": "ASUS Dual GeForce RTX 4070 Super",
   "marca": "ASUS",
   "familia": "tarjetas-de-video",
   "precio": 2899,
   "oferta": 0,
   "img": "imágenes/rtx4070super.jpg",
   "alt": "Tarjeta de video ASUS Dual GeForce RTX 4070 Super",
   "desc": "Tarjeta gráfica de alto rendimiento para juegos en QHD.",
   "specs": [
    [
     "Memoria",
     "12GB GDDR6X"
    ],
    [
     "Núcleos CUDA",
     "7168"
    ],
    [
     "Ventiladores",
     "2 axiales"
    ],
    [
     "Consumo",
     "220 W"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "12 GB",
    "GDDR6X"
   ],
   "familiaNombre": "Tarjetas de video",
   "cat": "componentes",
   "ruta": "categorias/tarjetas-de-video.html"
  },
  {
   "id": "ryzen7",
   "nombre": "Procesador Ryzen 7",
   "marca": "AMD",
   "familia": "procesadores",
   "precio": 1199,
   "oferta": 0,
   "img": "imágenes/CPU_Ryzen_7_8700G.jpg",
   "alt": "Procesador AMD Ryzen 7 8700G",
   "desc": "Procesador de 8 núcleos y 16 hilos con gráficos integrados.",
   "specs": [
    [
     "Núcleos / Hilos",
     "8 Núcleos / 16 Hilos"
    ],
    [
     "Socket",
     "AM5"
    ],
    [
     "Gráficos integrados",
     "AMD Radeon Graphics"
    ],
    [
     "Frecuencia Max Boost",
     "Hasta 5.1 GHz"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "AM5",
    "Gráficos integrados"
   ],
   "familiaNombre": "Procesadores",
   "cat": "componentes",
   "ruta": "categorias/procesadores.html"
  },
  {
   "id": "r55600",
   "nombre": "AMD Ryzen 5 5600",
   "marca": "AMD",
   "familia": "procesadores",
   "precio": 449,
   "oferta": 0,
   "img": "imágenes/r55600.jpg",
   "alt": "Procesador AMD Ryzen 5 5600 para socket AM4",
   "desc": "Procesador de 6 núcleos con excelente relación precio-rendimiento.",
   "specs": [
    [
     "Núcleos / Hilos",
     "6 / 12"
    ],
    [
     "Socket",
     "AM4"
    ],
    [
     "Frecuencia",
     "3.5 GHz base, hasta 4.4 GHz"
    ],
    [
     "TDP",
     "65 W"
    ],
    [
     "Incluye",
     "Disipador Wraith Stealth"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "AM4"
   ],
   "familiaNombre": "Procesadores",
   "cat": "componentes",
   "ruta": "categorias/procesadores.html"
  },
  {
   "id": "r77800x3d",
   "nombre": "AMD Ryzen 7 7800X3D",
   "marca": "AMD",
   "familia": "procesadores",
   "precio": 1799,
   "oferta": 8,
   "img": "imágenes/r77800x3d.jpg",
   "alt": "Procesador AMD Ryzen 7 7800X3D con 3D V-Cache",
   "desc": "Procesador gamer con 3D V-Cache, uno de los más rápidos para jugar.",
   "specs": [
    [
     "Núcleos / Hilos",
     "8 / 16"
    ],
    [
     "Socket",
     "AM5"
    ],
    [
     "Frecuencia",
     "Hasta 5.0 GHz"
    ],
    [
     "Caché L3",
     "96 MB (3D V-Cache)"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "AM5"
   ],
   "familiaNombre": "Procesadores",
   "cat": "componentes",
   "ruta": "categorias/procesadores.html"
  },
  {
   "id": "ram16",
   "nombre": "Memoria RAM 16GB DDR5",
   "marca": "Genérica",
   "familia": "memoria-ram",
   "precio": 349,
   "oferta": 0,
   "img": "imágenes/RAM_16GB_DDR5.png",
   "alt": "Módulo de memoria RAM DDR5 de 16 GB",
   "desc": "Memoria DDR5 de 16GB a 5600 MHz con disipador de aluminio.",
   "specs": [
    [
     "Capacidad",
     "16GB (1 x 16GB o Kit)"
    ],
    [
     "Velocidad",
     "5600 MHz"
    ],
    [
     "Tecnología",
     "DDR5"
    ],
    [
     "Disipador",
     "Aluminio de alto rendimiento"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "DDR5",
    "16 GB"
   ],
   "familiaNombre": "Memoria RAM",
   "cat": "componentes",
   "ruta": "categorias/memoria-ram.html"
  },
  {
   "id": "kfury16",
   "nombre": "Kingston Fury Beast 16GB DDR4",
   "marca": "Kingston",
   "familia": "memoria-ram",
   "precio": 179,
   "oferta": 0,
   "img": "imágenes/kfury16.jpg",
   "alt": "Módulo de memoria Kingston Fury Beast DDR4 de 16 GB",
   "desc": "Módulo DDR4 de 16GB a 3200 MHz con disipador.",
   "specs": [
    [
     "Capacidad",
     "16GB (1 x 16GB)"
    ],
    [
     "Velocidad",
     "3200 MHz"
    ],
    [
     "Tecnología",
     "DDR4"
    ],
    [
     "Latencia",
     "CL16"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "DDR4",
    "16 GB"
   ],
   "familiaNombre": "Memoria RAM",
   "cat": "componentes",
   "ruta": "categorias/memoria-ram.html"
  },
  {
   "id": "tridentz5",
   "nombre": "G.SKILL Trident Z5 RGB 32GB DDR5",
   "marca": "G.SKILL",
   "familia": "memoria-ram",
   "precio": 649,
   "oferta": 12,
   "img": "imágenes/tridentz5.jpg",
   "alt": "Kit de memoria G.SKILL Trident Z5 RGB DDR5 de 32 GB",
   "desc": "Kit DDR5 de 32GB a 6000 MHz con iluminación RGB.",
   "specs": [
    [
     "Capacidad",
     "32GB (2 x 16GB)"
    ],
    [
     "Velocidad",
     "6000 MHz"
    ],
    [
     "Tecnología",
     "DDR5"
    ],
    [
     "Iluminación",
     "RGB"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "DDR5",
    "32 GB",
    "RGB"
   ],
   "familiaNombre": "Memoria RAM",
   "cat": "componentes",
   "ruta": "categorias/memoria-ram.html"
  },
  {
   "id": "ssd1tb",
   "nombre": "SSD NVMe 1TB",
   "marca": "Randirk",
   "familia": "almacenamiento",
   "precio": 289,
   "oferta": 20,
   "img": "imágenes/SSD_M.2_randirk.jpg",
   "alt": "Unidad SSD NVMe M.2 de 1 TB",
   "desc": "SSD M.2 NVMe de 1TB con lectura de hasta 3500 MB/s.",
   "specs": [
    [
     "Capacidad",
     "1 Terabyte (1TB)"
    ],
    [
     "Formato",
     "M.2 2280 NVMe"
    ],
    [
     "Lectura secuencial",
     "Hasta 3500 MB/s"
    ],
    [
     "Interfaz",
     "PCIe Gen 3x4 / Gen 4"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "SSD",
    "NVMe",
    "1 TB"
   ],
   "familiaNombre": "Almacenamiento",
   "cat": "componentes",
   "ruta": "categorias/almacenamiento.html"
  },
  {
   "id": "evo870",
   "nombre": "Samsung 870 EVO 1TB",
   "marca": "Samsung",
   "familia": "almacenamiento",
   "precio": 349,
   "oferta": 0,
   "img": "imágenes/evo870.jpg",
   "alt": "Unidad SSD SATA Samsung 870 EVO de 1 TB",
   "desc": "SSD SATA de 1TB, ideal para renovar una PC o laptop.",
   "specs": [
    [
     "Capacidad",
     "1TB"
    ],
    [
     "Formato",
     "2.5\" SATA III"
    ],
    [
     "Lectura secuencial",
     "Hasta 560 MB/s"
    ],
    [
     "Escritura secuencial",
     "Hasta 530 MB/s"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "SSD",
    "SATA",
    "1 TB"
   ],
   "familiaNombre": "Almacenamiento",
   "cat": "componentes",
   "ruta": "categorias/almacenamiento.html"
  },
  {
   "id": "barracuda",
   "nombre": "Seagate Barracuda 2TB",
   "marca": "Seagate",
   "familia": "almacenamiento",
   "precio": 289,
   "oferta": 0,
   "img": "imágenes/barracuda.jpg",
   "alt": "Disco duro Seagate Barracuda de 2 TB",
   "desc": "Disco duro de 2TB para guardar juegos, fotos y archivos.",
   "specs": [
    [
     "Capacidad",
     "2TB"
    ],
    [
     "Formato",
     "3.5\" SATA III"
    ],
    [
     "Velocidad",
     "7200 RPM"
    ],
    [
     "Caché",
     "256 MB"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "HDD",
    "SATA",
    "2 TB"
   ],
   "familiaNombre": "Almacenamiento",
   "cat": "componentes",
   "ruta": "categorias/almacenamiento.html"
  },
  {
   "id": "b650",
   "nombre": "Placa Madre B650",
   "marca": "Gigabyte",
   "familia": "placas-madre",
   "precio": 749,
   "oferta": 0,
   "img": "imágenes/Placa_Madre_B650_gigabyte.jpg",
   "alt": "Placa madre Gigabyte B650 para procesadores AMD",
   "desc": "Placa madre AM5 con chipset B650 y soporte DDR5 hasta 128GB.",
   "specs": [
    [
     "Socket",
     "AM5"
    ],
    [
     "Chipset",
     "AMD B650"
    ],
    [
     "Memoria",
     "DDR5 (Hasta 128GB)"
    ],
    [
     "Factor de forma",
     "Micro-ATX / ATX"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "AM5",
    "DDR5"
   ],
   "familiaNombre": "Placas madre",
   "cat": "componentes",
   "ruta": "categorias/placas-madre.html"
  },
  {
   "id": "b660m",
   "nombre": "MSI PRO B660M-A WiFi DDR4",
   "marca": "MSI",
   "familia": "placas-madre",
   "precio": 549,
   "oferta": 0,
   "img": "imágenes/b660m.jpg",
   "alt": "Placa madre MSI PRO B660M-A WiFi DDR4 para Intel",
   "desc": "Placa Micro-ATX para procesadores Intel de 12.ª generación.",
   "specs": [
    [
     "Socket",
     "LGA1700"
    ],
    [
     "Chipset",
     "Intel B660"
    ],
    [
     "Memoria",
     "DDR4, 4 ranuras"
    ],
    [
     "Formato",
     "Micro-ATX"
    ],
    [
     "Conectividad",
     "WiFi integrado"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "LGA1700",
    "DDR4",
    "WiFi"
   ],
   "familiaNombre": "Placas madre",
   "cat": "componentes",
   "ruta": "categorias/placas-madre.html"
  },
  {
   "id": "tufb650",
   "nombre": "ASUS TUF Gaming B650-PLUS WiFi",
   "marca": "ASUS",
   "familia": "placas-madre",
   "precio": 999,
   "oferta": 0,
   "img": "imágenes/tufb650.jpg",
   "alt": "Placa madre ASUS TUF Gaming B650-PLUS WiFi para AMD",
   "desc": "Placa ATX para AMD Ryzen serie 7000 con DDR5 y WiFi.",
   "specs": [
    [
     "Socket",
     "AM5"
    ],
    [
     "Chipset",
     "AMD B650"
    ],
    [
     "Memoria",
     "DDR5"
    ],
    [
     "Formato",
     "ATX"
    ],
    [
     "Conectividad",
     "WiFi integrado"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "AM5",
    "DDR5",
    "WiFi",
    "ATX"
   ],
   "familiaNombre": "Placas madre",
   "cat": "componentes",
   "ruta": "categorias/placas-madre.html"
  },
  {
   "id": "fuente",
   "nombre": "Fuente de Poder 650W",
   "marca": "Genérica",
   "familia": "fuentes-de-poder",
   "precio": 259,
   "oferta": 0,
   "img": "imágenes/Fuente_Poder_650W.jpeg",
   "alt": "Fuente de poder de 650 vatios para PC",
   "desc": "Fuente de 650W con certificación 80 Plus Bronze y protecciones OVP, OPP y SCP.",
   "specs": [
    [
     "Potencia",
     "650 Watts"
    ],
    [
     "Certificación",
     "80 Plus Bronze"
    ],
    [
     "Tipo de cableado",
     "Estándar / Mallado"
    ],
    [
     "Protecciones",
     "OVP, OPP, SCP"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Bronze",
    "650 W"
   ],
   "familiaNombre": "Fuentes de poder",
   "cat": "componentes",
   "ruta": "categorias/fuentes-de-poder.html"
  },
  {
   "id": "mwe550",
   "nombre": "Cooler Master MWE 550 Bronze V2",
   "marca": "Cooler Master",
   "familia": "fuentes-de-poder",
   "precio": 239,
   "oferta": 0,
   "img": "imágenes/mwe550.jpg",
   "alt": "Fuente de poder Cooler Master MWE 550 Bronze V2",
   "desc": "Fuente de 550W para equipos de gama de entrada.",
   "specs": [
    [
     "Potencia",
     "550 W"
    ],
    [
     "Certificación",
     "80 Plus Bronze"
    ],
    [
     "Cableado",
     "No modular"
    ],
    [
     "Ventilador",
     "120 mm"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Bronze",
    "550 W"
   ],
   "familiaNombre": "Fuentes de poder",
   "cat": "componentes",
   "ruta": "categorias/fuentes-de-poder.html"
  },
  {
   "id": "rm750e",
   "nombre": "Corsair RM750e",
   "marca": "Corsair",
   "familia": "fuentes-de-poder",
   "precio": 549,
   "oferta": 0,
   "img": "imágenes/rm750e.jpg",
   "alt": "Fuente de poder Corsair RM750e totalmente modular",
   "desc": "Fuente modular de 750W, lista para tarjetas gráficas modernas.",
   "specs": [
    [
     "Potencia",
     "750 W"
    ],
    [
     "Certificación",
     "80 Plus Gold"
    ],
    [
     "Cableado",
     "Totalmente modular"
    ],
    [
     "Estándar",
     "ATX 3.0 (PCIe 5.0)"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Gold",
    "750 W",
    "Modular"
   ],
   "familiaNombre": "Fuentes de poder",
   "cat": "componentes",
   "ruta": "categorias/fuentes-de-poder.html"
  },
  {
   "id": "gabinete",
   "nombre": "Gabinete ATX Gamer",
   "marca": "Genérica",
   "familia": "gabinetes",
   "precio": 199,
   "oferta": 0,
   "img": "imágenes/Gabinete_ATX_Gamer.png",
   "alt": "Gabinete ATX gamer para armar una PC",
   "desc": "Gabinete con panel de vidrio templado y ventiladores RGB incluidos.",
   "specs": [
    [
     "Formato",
     "ATX / Micro-ATX / Mini-ITX"
    ],
    [
     "Panel lateral",
     "Vidrio templado"
    ],
    [
     "Ventiladores",
     "Incluye ventiladores RGB"
    ],
    [
     "Puertos Frontales",
     "USB 3.0 / Audio HD"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "RGB",
    "Vidrio templado",
    "ATX"
   ],
   "familiaNombre": "Gabinetes",
   "cat": "componentes",
   "ruta": "categorias/gabinetes.html"
  },
  {
   "id": "h5flow",
   "nombre": "NZXT H5 Flow",
   "marca": "NZXT",
   "familia": "gabinetes",
   "precio": 429,
   "oferta": 0,
   "img": "imágenes/h5flow.jpg",
   "alt": "Gabinete NZXT H5 Flow con frontal perforado",
   "desc": "Gabinete mid tower con frontal perforado y gran flujo de aire.",
   "specs": [
    [
     "Formato",
     "ATX Mid Tower"
    ],
    [
     "Panel lateral",
     "Vidrio templado"
    ],
    [
     "Ventiladores",
     "2 x 120 mm incluidos"
    ],
    [
     "Frontal",
     "Perforado de alto flujo"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "ATX",
    "Vidrio templado"
   ],
   "familiaNombre": "Gabinetes",
   "cat": "componentes",
   "ruta": "categorias/gabinetes.html"
  },
  {
   "id": "lancool216",
   "nombre": "Lian Li Lancool 216",
   "marca": "Lian Li",
   "familia": "gabinetes",
   "precio": 479,
   "oferta": 0,
   "img": "imágenes/lancool216.jpg",
   "alt": "Gabinete Lian Li Lancool 216 con ventiladores grandes",
   "desc": "Gabinete con ventiladores de gran tamaño para una refrigeración eficiente.",
   "specs": [
    [
     "Formato",
     "ATX Mid Tower"
    ],
    [
     "Panel lateral",
     "Vidrio templado"
    ],
    [
     "Ventiladores",
     "2 x 160 mm frontales y 1 x 140 mm trasero"
    ],
    [
     "Frontal",
     "Malla de alto flujo"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "ATX",
    "Vidrio templado"
   ],
   "familiaNombre": "Gabinetes",
   "cat": "componentes",
   "ruta": "categorias/gabinetes.html"
  },
  {
   "id": "ml240l",
   "nombre": "Cooler Master MasterLiquid ML240L V2 RGB",
   "marca": "Cooler Master",
   "familia": "refrigeracion-liquida",
   "precio": 299,
   "oferta": 0,
   "img": "imágenes/ml240l.jpg",
   "alt": "Refrigeración líquida Cooler Master MasterLiquid ML240L V2 RGB de 240 mm",
   "desc": "Kit AIO de 240mm con ventiladores RGB, ideal para empezar.",
   "specs": [
    [
     "Radiador",
     "240 mm"
    ],
    [
     "Ventiladores",
     "2 x 120 mm"
    ],
    [
     "Iluminación",
     "RGB"
    ],
    [
     "Tipo",
     "AIO"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "240 mm",
    "RGB"
   ],
   "familiaNombre": "Refrigeración líquida",
   "cat": "componentes",
   "ruta": "categorias/refrigeracion-liquida.html"
  },
  {
   "id": "lf2280",
   "nombre": "Arctic Liquid Freezer II 280",
   "marca": "Arctic",
   "familia": "refrigeracion-liquida",
   "precio": 459,
   "oferta": 0,
   "img": "imágenes/lf2280.jpg",
   "alt": "Refrigeración líquida Arctic Liquid Freezer II 280 mm",
   "desc": "Kit AIO de 280mm con gran capacidad de enfriamiento.",
   "specs": [
    [
     "Radiador",
     "280 mm"
    ],
    [
     "Ventiladores",
     "2 x 140 mm"
    ],
    [
     "Extra",
     "Ventilador para el VRM"
    ],
    [
     "Tipo",
     "AIO"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "280 mm"
   ],
   "familiaNombre": "Refrigeración líquida",
   "cat": "componentes",
   "ruta": "categorias/refrigeracion-liquida.html"
  },
  {
   "id": "kraken360",
   "nombre": "NZXT Kraken 360",
   "marca": "NZXT",
   "familia": "refrigeracion-liquida",
   "precio": 849,
   "oferta": 10,
   "img": "imágenes/kraken360.jpg",
   "alt": "Refrigeración líquida NZXT Kraken 360 mm con cabezal RGB",
   "desc": "Kit AIO de 360mm para procesadores de alto rendimiento.",
   "specs": [
    [
     "Radiador",
     "360 mm"
    ],
    [
     "Ventiladores",
     "3 x 120 mm"
    ],
    [
     "Iluminación",
     "Cabezal RGB"
    ],
    [
     "Tipo",
     "AIO"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "360 mm",
    "RGB"
   ],
   "familiaNombre": "Refrigeración líquida",
   "cat": "componentes",
   "ruta": "categorias/refrigeracion-liquida.html"
  },
  {
   "id": "ak400",
   "nombre": "DeepCool AK400",
   "marca": "DeepCool",
   "familia": "disipadores",
   "precio": 129,
   "oferta": 0,
   "img": "imágenes/ak400.jpg",
   "alt": "Disipador de aire DeepCool AK400 de torre",
   "desc": "Disipador de torre con 4 tubos de calor y excelente relación precio-rendimiento.",
   "specs": [
    [
     "Tipo",
     "Torre, 4 tubos de calor"
    ],
    [
     "Ventilador",
     "120 mm"
    ],
    [
     "TDP",
     "Hasta 220 W"
    ],
    [
     "Compatibilidad",
     "AM5, AM4 e Intel LGA1700"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Torre",
    "120 mm"
   ],
   "familiaNombre": "Disipadores",
   "cat": "componentes",
   "ruta": "categorias/disipadores.html"
  },
  {
   "id": "peerless",
   "nombre": "Thermalright Peerless Assassin 120 SE",
   "marca": "Thermalright",
   "familia": "disipadores",
   "precio": 169,
   "oferta": 0,
   "img": "imágenes/peerless.jpg",
   "alt": "Disipador de aire Thermalright Peerless Assassin 120 SE de doble torre",
   "desc": "Disipador de doble torre con dos ventiladores y gran disipación.",
   "specs": [
    [
     "Tipo",
     "Doble torre, 6 tubos de calor"
    ],
    [
     "Ventiladores",
     "2 x 120 mm"
    ],
    [
     "Altura",
     "155 mm"
    ],
    [
     "Compatibilidad",
     "AM5, AM4 e Intel LGA1700"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Doble torre",
    "120 mm"
   ],
   "familiaNombre": "Disipadores",
   "cat": "componentes",
   "ruta": "categorias/disipadores.html"
  },
  {
   "id": "nhd15",
   "nombre": "Noctua NH-D15",
   "marca": "Noctua",
   "familia": "disipadores",
   "precio": 449,
   "oferta": 0,
   "img": "imágenes/nhd15.jpg",
   "alt": "Disipador de aire Noctua NH-D15 de doble torre",
   "desc": "Referente en refrigeración por aire: silencioso y muy eficaz.",
   "specs": [
    [
     "Tipo",
     "Doble torre, 6 tubos de calor"
    ],
    [
     "Ventiladores",
     "2 x 140 mm NF-A15"
    ],
    [
     "Altura",
     "165 mm"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "Doble torre",
    "140 mm"
   ],
   "familiaNombre": "Disipadores",
   "cat": "componentes",
   "ruta": "categorias/disipadores.html"
  },
  {
   "id": "p12pack",
   "nombre": "Arctic P12 PWM PST (pack de 5)",
   "marca": "Arctic",
   "familia": "ventiladores",
   "precio": 119,
   "oferta": 0,
   "img": "imágenes/p12pack.jpg",
   "alt": "Pack de cinco ventiladores Arctic P12 PWM PST de 120 mm",
   "desc": "Pack de 5 ventiladores de 120mm con control PWM.",
   "specs": [
    [
     "Tamaño",
     "120 mm"
    ],
    [
     "Velocidad",
     "200 - 1800 RPM"
    ],
    [
     "Control",
     "PWM"
    ],
    [
     "Incluye",
     "5 unidades"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "120 mm",
    "PWM"
   ],
   "familiaNombre": "Ventiladores",
   "cat": "componentes",
   "ruta": "categorias/ventiladores.html"
  },
  {
   "id": "sp120",
   "nombre": "Corsair iCUE SP120 RGB Elite (pack de 3)",
   "marca": "Corsair",
   "familia": "ventiladores",
   "precio": 249,
   "oferta": 0,
   "img": "imágenes/sp120.jpg",
   "alt": "Pack de tres ventiladores Corsair iCUE SP120 RGB Elite con controlador",
   "desc": "Pack de 3 ventiladores RGB con controlador incluido.",
   "specs": [
    [
     "Tamaño",
     "120 mm"
    ],
    [
     "Iluminación",
     "RGB direccionable"
    ],
    [
     "Incluye",
     "3 ventiladores y controlador"
    ],
    [
     "Control",
     "PWM"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "120 mm",
    "RGB",
    "PWM"
   ],
   "familiaNombre": "Ventiladores",
   "cat": "componentes",
   "ruta": "categorias/ventiladores.html"
  },
  {
   "id": "nfa12x25",
   "nombre": "Noctua NF-A12x25 PWM",
   "marca": "Noctua",
   "familia": "ventiladores",
   "precio": 109,
   "oferta": 0,
   "img": "imágenes/nfa12x25.jpg",
   "alt": "Ventilador Noctua NF-A12x25 PWM de 120 mm",
   "desc": "Ventilador de 120mm de alto rendimiento y bajo ruido.",
   "specs": [
    [
     "Tamaño",
     "120 mm"
    ],
    [
     "Velocidad",
     "450 - 2000 RPM"
    ],
    [
     "Control",
     "PWM"
    ],
    [
     "Rodamiento",
     "SSO2"
    ],
    [
     "Garantía",
     "12 meses"
    ]
   ],
   "tags": [
    "120 mm",
    "PWM"
   ],
   "familiaNombre": "Ventiladores",
   "cat": "componentes",
   "ruta": "categorias/ventiladores.html"
  }
 ]
};
