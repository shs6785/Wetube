export const home = (req, res) => res.render("home", {pageTitle: "Home"});

export const search = (req, res) => {
    const {
        query: { term:searchingBy}
    } = req;
    res.render("search", {pageTitle:"Search"});
};


export const videos = (req, res) => {
    res.render("videos");
};

export const upload = (req, res) => {
    res.render("upload");
};

export const videoDetail = (req, res) => {
    res.render("videoDetail");
};

export const editVideo = (req, res) => {
    res.render("editVideo");
};

export const deleteVideo = (req, res) => {
    res.render("deleteVideo");
};