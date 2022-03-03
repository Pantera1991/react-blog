import styled from 'styled-components';

export const ArticleImage = styled.div`
    padding: 10px;
    border-radius: 9px;
    margin: 0 10px;
    background-color: ${({ theme }) => theme.colors.accent};
    max-width: 1600px;

    img {
        border-radius: 8px;
    }

    ${({ theme }) => theme.mq.phone} {
        margin: 0 auto;
        padding: 15px;
    }
`;

export const ArticleContentWrapper = styled.div`
    margin-top: 15px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 20px;
    transition: margin-top 0.2s ease-out;

    ${({ theme }) => theme.mq.phone} {
        padding: 30px 50px 50px;
        margin-top: -120px;
    }

    ${({ theme }) => theme.mq.desktop} {
        width: calc(100% - 300px);
    }
`;

export const ArticleTitle = styled.h1`
    font-size: 4rem;
    color: #fff;
    line-height: 1.7;
    margin: 0 0 15px;
    font-weight: 500;
`;

export const ArticleContent = styled.div`
    color: ${({ theme }) => theme.colors.accent};

    p {
        align-self: center;
    }

    a {
        color: ${({ theme }) => theme.colors.accent};
    }

    blockquote {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #d4d3d3;
        line-height: 1.8;
        padding: 25px 25px 25px 50px;
        margin: 30px 0;
        background: ${({ theme }) => theme.colors.primaryDarkerLight};
        position: relative;

        strong {
            font-weight: inherit;
        }
    }

    blockquote::before {
        content: '';
        border-left: 6px solid ${({ theme }) => theme.colors.accent};
        position: absolute;
        top: 25px;
        left: 22px;
        height: calc(100% - 50px);
    }

    table {
        display: inline-block;
        line-height: 1.5;
        margin: 0 0 1.6rem;
        max-width: 100%;
        overflow-x: auto;
        text-align: left;
        width: 100%;
    }

    caption {
        color: #666;
        font-size: 0.875em;
        font-style: normal;
        margin-bottom: 1em;
        text-align: left;
    }

    th,
    td {
        border-bottom: 1px solid #eee;
        padding: 0.5em 5px;
    }

    th {
        color: ${({ theme }) => theme.colors.accent};
        font-weight: bold;
    }

    img {
        width: 100%;
        height: auto;
    }

    h3 {
        font-size: 30px;
        color: #fff;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        font-size: 16px;
        font-weight: 400;
        color: #d4d3d3;
        position: relative;
        padding: 5px 0 5px 20px;
    }

    li > p {
        padding: 0;
        margin: 0;
    }

    li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 12px;
        height: 9px;
        width: 9px;
        background: #777;
        border-radius: 50%;
    }

    hr {
        height: 1px;
        border-top: 1px solid #1e1e1e;
        border-bottom: unset;
        border-right: unset;
        border-left: unset;
        margin-top: 20px;
        width: 100%;
    }

    ${({ theme }) => theme.mq.tablet} {
        iframe {
            width: 100%;
        }
    }
`;
