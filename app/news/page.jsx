import Nav from "../components/NavBar/Nav";
import styles from "@/app/news/news.module.css";
import Card from "../components/cards/Card";

async function getProducts() {
    const res = await fetch('https://saurav.tech/NewsAPI/everything/cnn.json');
    const data = await res.json();
    return data.articles;
}

export default async function News() {
    let articles = [];
    try {
        articles = await getProducts();
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <Nav />
                {
                    Array.isArray(articles) ? (
                        articles.map((article, index) => (
                            <Card 
                                key={index} 
                                title={article.title} 
                                description={article.description} 
                                urlToImage={article.urlToImage} 
                                url={article.url} 
                            />
                        ))
                    ) : (
                        <p>No News available</p>
                    )
                }
            </div>
        </div>
    );
}
