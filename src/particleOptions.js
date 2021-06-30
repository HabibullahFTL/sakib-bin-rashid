export const particleOptions = {
    "autoPlay": true,
    "background": {
      "color": {
        "value": "#161F30"
      },
      "image": "",
      "position": "",
      "repeat": "",
      "size": 10,
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "fullScreen": {
      "enable": true,
      "zIndex": -1
    },
    "detectRetina": true,
    "fpsLimit": 60,
    "infection": {
      "cure": false,
      "delay": 0,
      "enable": false,
      "infections": 0,
      "stages": []
    },
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": false,
          "mode": []
        },
        "onDiv": {
          "selectors": [],
          "enable": false,
          "mode": [],
          "type": ["circle","triangle","rectangle"]
        },
        "onHover": {
          "enable": true,
          "mode": "trail",
          "parallax": {
            "enable": true,
            "force": 5,
            "smooth": 20
          }
        },
        "resize": true
      },
      "modes": {
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "easing": "ease-out-quad",
          "factor": 1,
          "maxSpeed": 50,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 200,
          "duration": 0.4
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 100,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 1
          }
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        },
        "push": {
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 500,
          "duration": 2,
          "factor": 100,
          "speed": 0.3,
          "maxSpeed": 50,
          "easing": "ease-out-quad"
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "trail": {
          "delay": .1,
          "pauseOnStop": false,
          "quantity": 5,
          "particles": {
            "color": {
              "value": "#fff",
              "animation": {
                "enable": true,
                "speed": 100,
                "sync": true
              }
            },
            "collisions": {
              "enable": false
            },
            "links": {
              "enable": false
            },
            "move": {
              "outModes": {
                "default": "destroy"
              },
              "speed": 2
            },
            "size": {
              "value": 4,
              "animation": {
                "enable": true,
                "speed": 1,
                "minimumValue": 1,
                "sync": true,
                "startValue": "min",
                "destroy": "max"
              }
            }
          }
        }
      }
    },
    "manualParticles": [],
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    },
    "particles": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": true,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "collisions": {
        "bounce": {
          "horizontal": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          },
          "vertical": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          }
        },
        "enable": true,
        "mode": "bounce",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": "#fff",
        "animation": {
          "h": {
            "count": 0,
            "enable": true,
            "offset": 0,
            "speed": 50,
            "sync": false
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          }
        }
      },
      "destroy": {
        "mode": "none",
        "split": {
          "count": 1,
          "factor": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 3
          },
          "rate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": {
              "min": 4,
              "max": 9
            }
          },
          "sizeOffset": true
        }
      },
      "life": {
        "count": 0,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "sync": false
        },
        "duration": {
          "random": {
            "enable": false,
            "minimumValue": 0.0001
          },
          "value": 0,
          "sync": false
        }
      },
      "links": {
        "blink": false,
        "color": {
          "value": "#ffffff"
        },
        "consent": false,
        "distance": 100,
        "enable": true,
        "frequency": 1,
        "opacity": 0,
        "shadow": {
          "blur": 5,
          "color": {
            "value": "#00ff00"
          },
          "enable": false
        },
        "triangles": {
          "enable": false,
          "frequency": 1
        },
        "width": 1,
        "warp": false
      },
      "move": {
        "angle": {
          "offset": 0,
          "value": 90
        },
        "attract": {
          "distance": 200,
          "enable": false,
          "rotate": {
            "x": 3000,
            "y": 3000
          }
        },
        "decay": 0,
        "distance": 0,
        "direction": "none",
        "drift": 0,
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "inverse": false,
          "maxSpeed": 50
        },
        "path": {
          "clamp": true,
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0
          },
          "enable": false
        },
        "outModes": {
          "default": "out",
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "random": false,
        "size": 10,
        "speed": 2,
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fillColor": {
            "value": "#000000"
          }
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": true,
          "area": 800,
          "factor": 1000
        },
        "limit": 0,
        "value": 100
      },
      "opacity": {
        "random": {
          "enable": true,
          "minimumValue": 0.3
        },
        "value": {
          "min": 0.2,
          "max": 0.3
        },
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 0.5,
          "sync": false,
          "destroy": "none",
          "minimumValue": 0.3,
          "startValue": "random"
        }
      },
      "reduceDuplicates": false,
      "roll": {
        "darken": {
          "enable": false,
          "value": 0
        },
        "enable": false,
        "enlighten": {
          "enable": false,
          "value": 0
        },
        "speed": 25
      },
      "rotate": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false
      },
      "shadow": {
        "blur": 0,
        "color": {
          "value": "#000000"
        },
        "enable": false,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "shape": {
        "options": {
          "image": [
            null
          ],
          "images": [
            null
          ]
        },
        "type": ["circle"]
      },
      "size": {
        "random": {
          "enable": true,
          "minimumValue": 1
        },
        "value": {
          "min": 2,
          "max": 5
        },
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 3,
          "sync": false,
          "destroy": "none",
          "minimumValue": 1,
          "startValue": "random"
        }
      },
      "stroke": {
        "width": 0
      },
      "tilt": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "enable": false
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": .5
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      },
      "wobble": {
        "distance": 5,
        "enable": false,
        "speed": 50
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "themes": []
  }