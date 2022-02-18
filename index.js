Vue.createApp({
    data() {
        return {
            title1: 'TP DataBinding - Profile User',
            name: 'Albert',
            age: 24,
            imgLink: "https://p1.storage.canalblog.com/24/86/1546193/123452445.png"
        };
    },

    methods: {
        affichageNbr1() {
            return Math.random();

        },
        agePlus() {
            age = 24;
            age1 = age + 10;
            return age1;
        }


    },

}).mount('#app');