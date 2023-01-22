export type Product = {
    
        id: number;
        title: string;
        description: string;
        price: number;
        imageUrl:string;
        averageRating: number;
        ratingCount: number;
        score: number;
        link: string;
    
}


export type Ingredients = {    
        aisle: string;
        amount: number
        consitency: string;
        id: number;
        image: string;
        measures: {
            metric: {
                amount: number;
                unitLong: string;
                unitShort: string
            },
            us: {
                amount: number;
                unitLong: string;
                unitShort: string
            }
        };
        meta: Array <Record <string, unknown>[]>;
        name: string;
        original: string;
        originalName: string;
        unit: string
    
}

export type RecipeType = {
    id: number;
    title: string;
    image: string;
    imageType: string;
    servings: number;
    readyInMinutes: number;
    license: string;
    sourceName: string;
    sourceUrl: string;
    spoonacularSourceUrl: string;
    aggregateLikes: number;
    healthScore: number;
    spoonacularScore: number;
    pricePerServing: number;
    analyzedInstructions:Array <Record <string, unknown>[]>,
    cheap: boolean;
    creditsText: string;
    cuisines: Array <Record <string, unknown>[]>,
    dairyFree: boolean;
    diets: Array <Record <string, unknown>[]>,
    gaps: string;
    glutenFree: boolean;
    instructions: string;
    ketogenic: boolean;
    lowFodmap: boolean;
    occasions: Array <Record <string, unknown>[]>,
    sustainable: boolean;
    vegan: boolean;
    vegetarian: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    whole30: boolean;
    weightWatcherSmartPoints: number;
    dishTypes: string[];
    extendedIngredients: Array <Ingredients>;
    summary: string;
    winePairing:{
        pairedWines: string [],
        pairingText: string;
        productMatches: Product[];
    }
}