import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowImg from 'assets/icons/arrow-down.svg';
import ClickOutside from '../atoms/ClickOutside';

const StyledDropdown = styled.div`
    position: relative;
    width: 300px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 24px;
    user-select: none;
    cursor: pointer;
`;

const StyledDropdownBtn = styled.div`
    color: ${({ theme }) => theme.colors.accent};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.4rem;
    padding: 12px 15px;
    text-transform: uppercase;
`;

const StyledArrowImg = styled.img`
    width: 20px;
    height: 20px;
`;

const StyledDropdownContent = styled.div`
    position: absolute;
    top: 120%;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    border: solid 1.5px ${({ theme }) => theme.colors.accent};
`;

const StyledDropdownItem = styled.div`
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease-in;
    color: ${({ theme }) => theme.colors.accent};

    :hover {
        background-color: ${({ theme }) => theme.colors.primary600};
    }
`;

const CategorySelect = ({ data, firstElement, onChange }) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(firstElement);

    const handleActive = () => setIsActive(!isActive);
    const handleSelected = (event) => {
        if (onChange) {
            onChange(event.target.dataset.key);
        }
        setSelected(event.target.innerText);
        setIsActive(false);
    };

    const handleClickOutside = () => {
        setIsActive(false);
    };

    return (
        <ClickOutside onClickOutside={handleClickOutside}>
            <StyledDropdown tabIndex={0}>
                <StyledDropdownBtn onClick={handleActive}>
                    {selected}
                    <StyledArrowImg src={ArrowImg} />
                </StyledDropdownBtn>
                {isActive && (
                    <StyledDropdownContent>
                        <StyledDropdownItem data-key={-1} onClick={handleSelected}>
                            {firstElement}
                        </StyledDropdownItem>
                        {data.map((item) => (
                            <StyledDropdownItem key={item.id} data-key={item.id} onClick={handleSelected}>
                                {item.name}
                            </StyledDropdownItem>
                        ))}
                    </StyledDropdownContent>
                )}
            </StyledDropdown>
        </ClickOutside>
    );
};

CategorySelect.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,

    firstElement: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

CategorySelect.defaultProps = {
    onChange: null,
};

export default CategorySelect;
