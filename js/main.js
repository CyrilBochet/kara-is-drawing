$(document).ready(function () {


    let projects = [
        {
            "id": 1,
            "titre": "Multi sites Magento",
            "description": "Amélioration et mise à jour de 3 sites e-commerce sur Magento. \n" +
                "Paramétrage de modules et amélioration de l'expérience utilisateur",
            "thumbnail": "assets/img/portfolio/cabin.png",
            "image": "assets/img/portfolio/cabin.png",
            "tag": ["MAGENTO", "MULTISITE"],
            "filter": "web",
        },
        {
            "id": 2,
            "titre": "Multi sites Magento",
            "description": "Amélioration et mise à jour de 3 sites e-commerce sur Magento. \n" +
                "Paramétrage de modules et amélioration de l'expérience utilisateur",
            "thumbnail": "assets/img/portfolio/cabin.png",
            "image": "assets/img/portfolio/cabin.png",
            "tag": ["MAGENTO", "MULTISITE"],
            "filter": "web",
        },
        {
            "id": 3,
            "titre": "Multi sites Magento",
            "description": "Amélioration et mise à jour de 3 sites e-commerce sur Magento. \n" +
                "Paramétrage de modules et amélioration de l'expérience utilisateur",
            "thumbnail": "assets/img/portfolio/cabin.png",
            "image": "assets/img/portfolio/cabin.png",
            "tag": ["MAGENTO", "MULTISITE"],
            "filter": "web",
        },
        {
            "id": 4,
            "titre": "Multi sites Magento",
            "description": "Amélioration et mise à jour de 3 sites e-commerce sur Magento. \n" +
                "Paramétrage de modules et amélioration de l'expérience utilisateur",
            "thumbnail": "assets/img/portfolio/cabin.png",
            "image": "assets/img/portfolio/cabin.png",
            "tag": ["MAGENTO", "MULTISITE"],
            "filter": "web",
        },
        {
            "id": 5,
            "titre": "Multi sites Magento",
            "description": "Amélioration et mise à jour de 3 sites e-commerce sur Magento. \n" +
                "Paramétrage de modules et amélioration de l'expérience utilisateur",
            "thumbnail": "assets/img/portfolio/cabin.png",
            "image": "assets/img/portfolio/cabin.png",
            "tag": ["MAGENTO", "MULTISITE"],
            "filter": "web",
        },
        {
            "id": 6,
            "titre": "Multi sites Magento",
            "description": "Amélioration et mise à jour de 3 sites e-commerce sur Magento. \n" +
                "Paramétrage de modules et amélioration de l'expérience utilisateur",
            "thumbnail": "assets/img/portfolio/cabin.png",
            "image": "assets/img/portfolio/cabin.png",
            "tag": ["MAGENTO", "MULTISITE"],
            "filter": "web",
        },
    ]
    createProjects(projects);
});


function createProjects(projects) {

    for (let i = 0; i < projects.length; i++) {

        let thumbnail = '<div class="col-md-6 col-lg-4 mb-5">\n' +
            '                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal'+projects[i]["id"]+'">\n' +
            '                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">\n' +
            '                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-search-plus fa-3x"></i></div>\n' +
            '                    </div>\n' +
            '                    <img class="img-fluid" src="'+projects[i]["thumbnail"]+'" alt=""/>\n' +
            '                </div>\n' +
            '            </div>';


        let elem = '<div class="portfolio-modal modal fade" id="portfolioModal'+projects[i]["id"]+'" tabindex="-1" role="dialog"\n' +
            '     aria-labelledby="portfolioModal'+projects[i]["id"]+'Label" aria-hidden="true">\n' +
            '    <div class="modal-dialog modal-xl" role="document">\n' +
            '        <div class="modal-content">\n' +
            '            <button class="close" type="button" data-dismiss="modal" aria-label="Close">\n' +
            '                <span aria-hidden="true"><i class="fas fa-times"></i></span>\n' +
            '            </button>\n' +
            '            <div class="modal-body text-center">\n' +
            '                <div class="container">\n' +
            '                    <div class="row justify-content-center">\n' +
            '                        <div class="col-lg-8">\n' +
            '                            <!-- Portfolio Modal - Title-->\n' +
            '                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"\n' +
            '                                id="portfolioModal2Label">Tasty Cake</h2>\n' +
            '                            <!-- Icon Divider-->\n' +
            '                            <div class="divider-custom">\n' +
            '                                <div class="divider-custom-line"></div>\n' +
            '                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>\n' +
            '                                <div class="divider-custom-line"></div>\n' +
            '                            </div>\n' +
            '                            <!-- Portfolio Modal - Image-->\n' +
            '                            <img class="img-fluid mb-5" src="'+projects[i]["image"]+'" alt=""/>\n' +
            '                            <!-- Portfolio Modal - Text-->\n' +
            '                            <p class="mb-5">'+projects[i]["description"]+'</p>\n' +
            '                            <button class="btn btn-primary" data-dismiss="modal">\n' +
            '                                <i class="fas fa-times fa-fw"></i>\n' +
            '                                Close Window\n' +
            '                            </button>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';

        var div = document.createElement('div');
        div.innerHTML = thumbnail;
        div.className = 'col-md-6 col-lg-4 mb-5';
        $("#thumbnails").append(thumbnail);

        var div = document.createElement('div');
        div.innerHTML = elem;

        $("#modals").append(div);
    }


}

