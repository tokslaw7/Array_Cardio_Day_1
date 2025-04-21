
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
        ];
    
        const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
        ];
    
        // Array.prototype.filter()
        // 1. Filter the list of inventors for those who were born in the 1500's

        /**
         * Parameters:
         * Input: Array of inventors
         * Output: Array of list of  inventors meeting the condition
         * Results: Display lists of filtered lists. Key /value pair of lists
         * Edge case
         * Pseudocode:
         * 1. create a variable to store the list of inventors
         * 2. create a conditional statement to verify if condition is true
         *        check year they were born
         *        check if year is > or = to 1500 AND <=1599
         * 3. if conditions are true = Add the result to the new filtered list
         * 4. last step: return a display list of filtered list
         * */
    
        const fifteen = inventors.filter(function (inventor) {
            if (inventor.year >= 1500 && inventor.year < 1600) {
                return true;
            }
        });
        console.table(fifteen);
    
        // Array.prototype.map()
        // 2. Give us an array of the inventors first and last names
        /**
             * Parameters:
                 * Input : Array of inventors
                 * Output: Array of first and last names
             * Results: Display list of first and last names
             * Edge case:
             * Pseudocode:
                 * create a variable to store the list of inventors
                 * take the first name and last name ,then combine them into a string
                 * add the full name to a new list
             * last step: display the list of full names
         * */
        const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
        console.log(fullNames);
    
        // Array.prototype.sort()
        // 3. Sort the inventors by birthdate, oldest to youngest
        // const ordered = inventors.sort(function (a, b) {
        //     if (a.year > b.year) {
        //         return 1;
        //     }else{
        //         return -1;
        //     }
        // });
        // console.table(ordered);

        /**
         * Pseudocode:
         * 
         * create a variable to store the list of inventors
         * compare each pair of inventors 
         * look at their year of birth
         * write a conditional statement to check if a was born after b in the new list or otherwise
         * last step: display the sorted list.
         */

        const  ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
        console.table(ordered);
    
        // Array.prototype.reduce()
        // 4. How many years did all the inventors live all together?

        /**
         * start with total set to zero
         * go thru each inventor(total,inventor)
         * for each iventor: 
         * subtract their birthyear from year passed = years they lived
         * add the result to the total
         * then store the valaue  
         * last:display the results
         * 
         */
        
        const totalYears = inventors.reduce((total, inventor) => {
            return total + (inventor.passed - inventor.year)
        }, 0);//running total

        console.log(totalYears);
    
        // 5. Sort the inventors by years lived

        const oldest = inventors.sort(function(a,b){
            const lastDude = a.passed - a.year;
            const nextDude = b.passed - b.year;
            return lastDude > nextDude ? -1 : 1;
        });
        console.table(oldest);


        // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
        // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

        // const category = document.querySelector(".mw-category");
        // const links = [...category.querySelectorAll('a')];
        // const de = links
        //             .map(link => link.textContent)
        //             .filter(streetName => streetName.includes('de'));

        // 7. sort Exercise
        // Sort the people alphabetically by last name
        const alpha = people.sort(function(lastOne, nextOne){
            const [alast, afirst] = lastOne.split(", ");
            const [blast, bfirst] = nextOne.split(", ");
            return alast > blast ? 1 : -1;
        });
        console.log(alpha);
    
        // 8. Reduce Exercise
        // Sum up the instances of each of these
        const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

        const transportation = data.reduce(function(obj, item){
            if(!obj[item]){
                obj[item] = 0;
            }
            obj[item]++;
            return obj;
        }, {});
    console.log(transportation);