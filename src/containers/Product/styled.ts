import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;

  a.back-link {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    span {
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l6};
        color: ${theme.colors.dark};
        font-weight: 400;
      `};
    }
  }
`;

export const ContainerTop = styled.section`
  display: grid;
  grid-template-columns: 0.38fr 0.62fr;
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const ContainerGallery = styled.div`
  display: grid;
  grid-template-columns: 55px 1fr;
  gap: 1rem;

  .gallery {
    .input-radio {
      display: none;
    }

    .label-option {
      display: block;
      background-color: ${({ theme }) => theme.colors.white};
      grid-column: 1;
      height: 55px;
      border-radius: 0.813rem;
      padding: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease-out;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .label-option.on {
      background-color: ${({ theme }) => theme.colors.primary}CC;
    }

    .label-option ~ .label-option {
      margin-top: 1rem;
    }
  }

  .main-img {
    height: 60vh;
    width: 100%;
    grid-column: 2;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.813rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const ContainerMainInfos = styled.div`
  display: flex;
  flex-direction: column;

  .container-top {
    padding: 0.5rem;

    h1 {
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l1};
        color: ${theme.colors.dark};
        font-weight: bold;
      `}
    }
    .brand {
      display: block;
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l4};
        color: ${theme.colors.placeholder}80;
        margin-top: 0.5rem;
      `};
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: column;
    height: 100%;

    .rating {
      padding: 1rem 0.5rem;
      display: flex;
      gap: 1.5rem;

      .stars {
        ${({ theme }) => css`
          color: ${theme.colors.accent[1]};
        `}

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }

        svg + svg {
          margin-left: 0.5rem;
        }
      }

      .rating-number {
        ${({ theme }) => css`
          font-size: ${theme.fontSizes.l6};
          color: ${theme.colors.accent[1]};
        `}
      }
    }

    .price {
      ${({ theme }) => css`
        color: ${theme.colors.dark};
        font-size: ${theme.fontSizes.l4};
      `}
      font-weight: 500;
    }

    .description {
      padding: 0.5rem;
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l6};
        color: ${theme.colors.dark};
      `}
    }

    & > button {
      align-self: flex-end;
      margin-top: auto;
    }
  }
`;

export const ContainerBottom = styled.section`
  margin-top: 2.5rem;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.placeholder}80;
    margin-bottom: 2rem;
    border-radius: 3rem;
  }

  h2 {
    ${({ theme }) => css`
      color: ${theme.colors.dark};
      font-size: ${theme.fontSizes.l4};
      font-weight: 500;
    `}
  }

  .container-reviews {
    margin-bottom: 3rem;
    & > p {
      margin-top: 1.5rem;

      font-size: ${({ theme }) => theme.fontSizes.l5};
      font-weight: 400;

      & > .accent {
        color: ${({ theme }) => theme.colors.accent['1']};
        text-decoration: underline;
      }
    }

    .container-items {
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;

      .review-item {
        & > * + * {
          margin-top: 0.25rem;
        }

        & > * + *.comment {
          margin-top: 0.5rem;
        }

        .stars {
          svg {
            width: 1.2rem;
            height: 1.2rem;
          }

          svg + svg {
            margin-left: 0.5rem;
          }
        }
        .created-by-date {
          ${({ theme }) => css`
            font-size: ${theme.fontSizes.base};
            color: ${theme.colors.secondary};
          `}
        }
      }
    }
  }
`;
