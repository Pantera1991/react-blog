import React from "react";
import {format, parseISO} from 'date-fns';
import {pl} from 'date-fns/locale';
import PropTypes from 'prop-types';


export const DateFormatter = ({dateString}) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLL d, yyyy', {locale: pl})}</time>;
}

export const TimeFormatter = ({dateString}) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'HH:mm', {locale: pl})}</time>;
}

DateFormatter.propTypes = {
    dateString: PropTypes.string.isRequired
}

TimeFormatter.propTypes = {
    dateString: PropTypes.string.isRequired
}