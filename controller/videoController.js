//import { videos } from "../db.js";
import routes from "../routes";

export const home = (req, res) => {
    res.render ("home", { pageTitle: "Home", videos: [] })
};

export const search = (req, res) => {
    const {
        query: { term:searchingBy }
    } = req;
    res.render("search", {pageTitle:"Search", searchingBy, videos});
};




export const getUpload = (req, res) => {
    res.render("upload");
};

export const postUpload = (req, res) => {
    const { 
        boyd: { file, title, description }
    } = req;
    res.redirect(routes.videoDetail(324393));
}


export const videoDetail = (req, res) => {
    res.render("videoDetail");
};

export const editVideo = (req, res) => {
    res.render("editVideo");
};

export const deleteVideo = (req, res) => {
    res.render("deleteVideo");
};