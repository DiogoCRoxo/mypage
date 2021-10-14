
        const sarandi = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8652221529674!2d-51.137907684625915!3d-29.98330313539646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951976d8e8ecf61d%3A0x9a1c6793da9dfb3c!2sR.%20Vi%C3%AAira%20da%20Cunha%2C%2015%20-%20Sarandi%2C%20Porto%20Alegre%20-%20RS%2C%2091120-610%2C%20Brasil!5e0!3m2!1spt-BR!2sil!4v1634224490541!5m2!1spt-BR!2sil";

        const partenon = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.473104385485!2d-51.197593884623956!3d-30.051970538587703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519781428df183d%3A0x15cecfe73d0ced4f!2sR.%20Monteiro%20Lobato%2C%20490%20-%20Partenon%2C%20Porto%20Alegre%20-%20RS%2C%2090620-270%2C%20Brasil!5e0!3m2!1spt-BR!2sil!4v1634224429794!5m2!1spt-BR!2sil";

        const holon = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.593117021468!2d34.776114015209245!3d32.0261336291972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4a94175a991%3A0xbdd4efd50d573e69!2sHaShomer%20St%203%2C%20Holon!5e0!3m2!1spt-BR!2sil!4v1634224402725!5m2!1spt-BR!2sil";

        const googleMaps = [sarandi, partenon, holon];


        //Declaração dos botões
        const prevButton = document.getElementById("prev_button");
        const nextButton = document.getElementById("next_button");

        //Desabilitando o botão prev antes de começar
        prevButton.disabled = true;

        prevButton.addEventListener(
            "click",
            function (e) {
                decrementClick();
            }
        );

        nextButton.addEventListener(
            "click",
            function (e) {
                incrementClick()
            }
        );

        var counterVal = 0;

        function incrementClick() {
            console.log(googleMaps[counterVal++]);
            console.log(counterVal);
            verificaBotao(); 
        }
        function decrementClick() {
            console.log(googleMaps[counterVal--])
            console.log(counterVal);
            verificaBotao();
        }
        function verificaBotao(){
            if (counterVal == 0) {
                prevButton.disabled = true;
            }else{
                prevButton.disabled = false;
            }
            if (counterVal == 2) {
                nextButton.disabled = true;
            }else{
                nextButton.disabled = false;
            }
        }