import React, { useMemo } from "react";
import pageAttributes from "./ThemingAttributes";
import { useTranslation } from "react-i18next";
import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import NotFoundPage from "../NotFound";

import { ReactComponent as enMD } from "./theming.en.md";
import { ReactComponent as esMD } from "./theming.es.md";
import { ReactComponent as ptMD } from "./theming.pt.md";

const ThemingPage = () => {
	const { i18n } = useTranslation();
	const language: AppLanguages = useMemo(() => i18n.language as AppLanguages, [i18n.language]);

	const components: LanguagesRecord<React.FC> = {
		en: enMD,
		"pt-BR": ptMD,
		"es-ES": esMD,
	};

	if (!components[language]) {
		return <NotFoundPage />;
	}

	return React.createElement(components[language], pageAttributes);
};

export default ThemingPage;
