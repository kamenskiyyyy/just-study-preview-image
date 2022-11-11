import {ParsedRequest} from "../types";

export type IFile = {
    [key in string]: any;
};

/**
 * Отдаем словарь с текущей локалью
 * @param file
 * @param lang?
 */
export const transition = (file: IFile, lang?: ParsedRequest['lang']) => {
    if (lang && file[lang]) {
        return file[lang];
    } else {
        return file['ru'];
    }
};
