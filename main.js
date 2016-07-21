console.log('i am allliiiiiiiiiiiiiive');
var url = 'http://localhost:3000';
//set up the page



//submitButton for user recipe selections
document.getElementById('submitTest').addEventListener('click', function(event){
  console.log('clicked');

        //endpoint selectors based on user input
        var proAllergen = document.getElementById('search-endpoint').value;
        var recipeOrSearch = document.getElementById('querySelector').value
          console.log(proAllergen, recipeOrSearch);


      ///CITATION: IF ELSE IN AJAX http://stackoverflow.com/questions/14762775/ajax-if-condition
      ///A statament that modifies the allergen info for API call depending on the user input
          var params = {
            url: url + '/get',
            method: 'POST',
            dataType: 'json'
          };

          if (proAllergen == 'gluten-free') {
            params.data = {querySelector: recipeOrSearch, allergens: '&allowedAllergy[]=393^Gluten-Free'}
          } else if (proAllergen == 'dairy-free') {
            params.data= {querySelector: recipeOrSearch, allergens: '&allowedAllergy[]=396^Dairy-Free'}
          } else {
            params.data = {querySelector: recipeOrSearch, allergens: ''}
          }

          $.ajax(params).done(function(response) {
            console.log("response", response);
                  // printing name and ingredients list of receipe
          var body = document.getElementById('recipe-result');
          var recipeTitle = response.matches[0].recipeName
          var appendTitle = document.getElementById('recipe-image').innerHTML = recipeTitle;
                  // printing image of recipe requested
          var imageTitle = document.getElementById('recipe-image');
          var printImage = response.matches[0].smallImageUrls[0];
          imageTitle.innerHTML = '<img class="image" src="' + printImage + '" width=150px height=150px/>';
          var ingredientsTitle = document.getElementById('recipe-ingredients');
          var printIngredients = response.matches[0].ingredients;
          ingredientsTitle.innerHTML = printIngredients

          }); // end done function


})//end event listener for click
