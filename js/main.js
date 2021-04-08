$(document).ready(function () {


    let projects = [
        {
            "id": 1,
            "titre": "Anxiété",
            "description": "Représentation personnelle de l'anxiété et de l'oppression.",
            "image": "assets/img/portfolio/image1.jpg",
            "dimensions": "21 X 29,7 - 160G/m²"
        },
        {
            "id": 2,
            "titre": "Amphiprioninae",
            "description": "Appartenant à la famille des pomacentridés. Ce sont des poissons d'un dizaine de centimètres, arborant des couleurs oranges et noirs. Cette espèce coexiste avec des anémones mortelles dont elle a fait son habitat.",
            "image": "assets/img/portfolio/image2.jpg",
            "dimensions": "21 X 29,7 - 160G/m²"

        },
        {
            "id": 3,
            "titre": "Apis Mellifera",
            "description": "Abeille européenne ou plus communément appelée \"mouche à miel\", elle occupe l'ensemble des continents excepté l'Antarctique. C'est l'une des plus grandes pollinisatrice.",
            "image": "assets/img/portfolio/image6.jpg",
            "dimensions": "A4 224gr"
        },
        {
            "id": 4,
            "titre": "Buccinum undatum",
            "description": "On le connait sous le nom de Bulot, un gastéropode reconnu pour ses qualités gustatives, sa coquille peut arborer plusieurs teintes différentes, on le retrouve majoritairement sur les côtes atlantique. \n",
            "image": "assets/img/portfolio/image4.jpg",
            "dimensions": "A4 224gr"

        },
        {
            "id": 5,
            "titre": "Crane Homo sapiens",
            "description": "Aquarelle réalisée à partir d'une photo représentant le crâne d'un être humain ayant vécu dans les alentours de Menton 700 avant Jésus Christ.",
            "image": "assets/img/portfolio/image5.jpg",
            "dimensions": "A4 224gr"
        },
        {
            "id": 6,
            "titre": "Rhizostoma pulmo",
            "description": "Servant d'abris aux petits poissons, cette méduse se reconnait à sa couleur bleutée et nacrée et ses 8 sous bras issues de 4 bras soudés. On la retrouves dans la méditerranées et la mer noire. Habituellement elle mesure entre 30 et 60 cm mais elle peut atteindre 1m dans les bonnes conditions.",
            "image": "assets/img/portfolio/image3.jpg",
            "dimensions": "A4 224gr"
        },
        {
            "id": 7,
            "titre": "Oryctes nasicornis\n",
            "description": "Une des trois seules espèces  paléarctiques  présentes en Europe, elle est absente dans la région de l'Angleterre et favorise un climat plus chaud. On le trouve donc au bord du bassin méditerranéens. Il est le plus gros coléoptère de France avec une longueure oscillant entre 20 et 40 mm.",
            "image": "assets/img/portfolio/image7.jpg",
            "dimensions": "A4 224gr"
        },
        {
            "id": 8,
            "titre": "Python Regius ",
            "description": "Plus communement appelé le Python Royal, est un serpent originaire du continent africain. Il est très docile et craintif, donc facilement sujet au stress. Son système de défence contre les agresseurs est simple, il s'enroule sur lui même en ne faisant sortir que sa tête.",
            "image": "assets/img/portfolio/image8.jpg",
            "dimensions": "21 x 29,7 - 160g/m²"
        },
        {
            "id": 9,
            "titre": "Céphalopode benthique",
            "description": "Le mot \"Céphalopode\" désigne les poulpes et les pieuvres, des animaux marins. Le mot \"benthique\" caractérise les espèces peuplant les bas fonds des étendues d'eau. Cet animal peut faire preuve de mémoire et possède une capacité d'apprentissage.\n",
            "image": "assets/img/portfolio/image9.jpg",
            "dimensions": "21 x 29,7 - 160g/m²"
        },
    ]
    createProjects(projects);
});


function createProjects(projects) {

    for (let i = 0; i < projects.length; i++) {

        let thumbnail = '<div class="col-md-6 col-lg-4 mb-5">\n' +
            '                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal' + projects[i]["id"] + '">\n' +
            '                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">\n' +
            '                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-search-plus fa-3x"></i></div>\n' +
            '                    </div>\n' +
            '                    <img class="img-fluid" src="' + projects[i]["image"] + '" alt=""/>\n' +
            '                </div>\n' +
            '            </div>';


        let elem = '<div class="portfolio-modal modal fade" id="portfolioModal' + projects[i]["id"] + '" tabindex="-1" role="dialog"\n' +
            '     aria-labelledby="portfolioModal' + projects[i]["id"] + 'Label" aria-hidden="true">\n' +
            '    <div class="modal-dialog modal-xl" role="document">\n' +
            '        <div class="modal-content">\n' +
            '            <button class="close" type="button" data-dismiss="modal" aria-label="Close">\n' +
            '                <span aria-hidden="true"><i class="fas fa-times"></i></span>\n' +
            '            </button>\n' +
            '            <div class="modal-body text-center">\n' +
            '                <div class="container">\n' +
            '                    <div class="row justify-content-center">\n' +
            '                        <div class="col-lg-12">\n' +
            '                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-4"\n' +
            '                                id="portfolioModal2Label">' + projects[i]["titre"] + '</h2>\n' +
            '                            <p class="mb-3">' + projects[i]["description"] + '</p>\n' +
            '                            <img class="img-fluid mb-3" src="' + projects[i]["image"] + '" alt=""/>\n' +
            '                            <p class="mb-3">Dimensions : ' + projects[i]["dimensions"] + '</p>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';

        var div = document.createElement('div');
        div.innerHTML = thumbnail;
        $("#thumbnails").append(thumbnail);

        var div = document.createElement('div');
        div.innerHTML = elem;

        $("#modals").append(div);
    }


}

