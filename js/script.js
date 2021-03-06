const app = new Vue({
  el: "#app",
  data: {
    tiramisu: [
      {
        id: 1,
        nomeIngrediente: "zucchero",
        quantita: 120,
        check: false,
      },
      {
        id: 2,
        nomeIngrediente: "mascarpone",
        quantita: 750,
        check: false,
      },
      {
        id: 3,
        nomeIngrediente: "caffe",
        quantita: 300,
        check: false,
      },
      {
        id: 4,
        nomeIngrediente: "savoiardi",
        quantita: 400,
        check: false,
      },
      {
        id: 5,
        nomeIngrediente: "uova",
        quantita: 100,
        check: false,
      },
      {
        id: 6,
        nomeIngrediente: "cacao",
        quantita: 120,
        check: false,
      },
      {
        id: 7,
        nomeIngrediente: "marsala",
        quantita: 75,
        check: false,
      },
    ],
    nuovoIngrediente: "",
    checked: [],
  },

  methods: {
    aggiungiIngrediente() {
      const ingrediente = {
        check: false,
        nomeIngrediente:
          this.nuovoIngrediente.charAt(0).toUpperCase() +
          this.nuovoIngrediente.slice(1),
      };
      this.tiramisu.push(ingrediente);
      this.nuovoIngrediente = "";
    },
    rimuovi(i) {
      this.tiramisu.splice(i, 1);
    },
    pulisciLista() {
      this.checked = [];
      this.tiramisu = [];
    },
    check() {
      this.checked.push(this.nomeIngrediente);
      this.tiramisu.check = true;
      console.log(this.checked);
    },
    eraseChecked() {
      for (let i = 0; i < this.tiramisu.length; i++) {
        if (this.check === true) {
          this.tiramisu[i] = "";
        }
        console.log(this.tiramisu.check)
      }
    },
  },
});
