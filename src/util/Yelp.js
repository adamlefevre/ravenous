const clientId = "Bl9ZyCFA7JToT5PcRgpPWw";
const apiKey = "_tHcrrh5W4LY1KASCtJMpWOzHEkrCXTHjiH9SsqrV48Xmfn4QGqyR9tEREfEOivlHBW_0PAonaRBK5cfdaV2ovB3X2dSQE0OKNs_lYG2GDTfq8uchMKDzqAA7NgqXHYx";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(
                    business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }));
                }
            });
    }
};

export default Yelp;