/* eslint-disable prettier/prettier */
module.exports = {
    // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
    all: async ({ data }) => {
        const requests = data.externalData.map((data) => ({ slug: data.id, }));
        return requests;
    },
    // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
    permalink: '/:slug/',
    data: async ({ data, request }) => {

        const { slug } = request;
        const detail = data.externalData.find((data) => data.id === slug);

        return { detail };
    },
};
