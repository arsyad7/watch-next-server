const { WatchList } = require('../models');

class WatchListController {
    static async getWatchLists(req, res, next) {
        try {
            const { id: UserId } = req.user;

            const watchlists = await WatchList.findAll({ where: { UserId }})
            res.status(200).json(watchlists)
        } catch (err) {
            console.log(err);
        }
    }

    static async addWatchList(req, res, next) {
        try {
            const { title, imgUrl, rating, MovieId } = req.body;
            const { id: UserId } = req.user;

            const result = await WatchList.create({ title, imgUrl, rating, MovieId, UserId })
            res.status(201).json(result)
        } catch (err) {
            console.log(err);
        }
    }

    static async deleteWatchList(req, res, next) {
        try {
            const UserId = req.user.id;
            const id = req.params.id;

            await WatchList.destroy({ where: { UserId, id }})
            res.status(200).json({ message: "Movie deleted from your watchlists"})
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = WatchListController