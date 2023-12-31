import React from 'react';

import styles from './styles.module.scss';

import { Articles as ArticlesProps } from '../../graphql/__generated__/resolvers-types';
import { PopularArticle } from './PopularArticle';
import { RecentArticle } from './RecentArticle';

export type Props = { articles: ArticlesProps };

export const Articles = ({ articles }: Props) => {
    return (
        <div className={styles.base}>
            <div className={styles.description}>
                <div className={styles.titleBlock}>
                    <h2 className={styles.title}>OUR ARTICLES</h2>
                    <p className={styles.subtitle}>
                        Stay Up-to-Date with Our VR Insights
                    </p>
                </div>
                <button className={styles.button}>see all</button>
            </div>
            <div className={styles.articlesContainer}>
                <PopularArticle articles={articles.popular} />
                <RecentArticle articles={articles.recent} />
            </div>
        </div>
    );
};
