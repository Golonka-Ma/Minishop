import React from 'react';

const Body = () => {
    return (
        <div style={{ padding: '20px' }}>
            <section style={{ marginBottom: '40px' }}>
                <h2>Witaj w MiniShop!</h2>
                <p>Tu znajdziesz wszystko, czego potrzebujesz.</p>
                {/* Tutaj możesz dodać więcej treści, np. listę produktów */}
            </section>

            <section style={{ marginBottom: '40px' }}>
                <h2>Nasze Produkty</h2>
                <div>
                    {/* Tutaj można dodać komponenty wyświetlające produkty */}
                    <p>Produkt 1</p>
                    <p>Produkt 2</p>
                    {/* ... więcej produktów */}
                </div>
            </section>

            <section>
                <h2>O MiniShop</h2>
                <p>MiniShop to Twój sklep z wszystkimi potrzebnymi produktami.</p>
                {/* Możesz tutaj dodać więcej informacji o sklepie */}
            </section>
        </div>
    );
}

export default Body;
