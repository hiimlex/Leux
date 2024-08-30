import { AppLanguages, LanguagesRecord } from "@/i18n/i18n";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import NotFoundPage from "../NotFound";
import { modalAttr } from "./ModalAttributes";

import { ReactComponent as enMD } from "./modal.en.md";
import { ReactComponent as ptMD } from "./modal.pt.md";
import { ReactComponent as esMD } from "./modal.es.md";

const ModalPage = () => {
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

	return React.createElement(components[language], modalAttr);
};

export default ModalPage;
