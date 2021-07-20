import React, { useState, useEffect } from "react";
import telphone from "@/assets/images/telphone.png";
import fax from "@/assets/images/fax.png";
import contact from "@/assets/images/contact.png";
import mail from "@/assets/images/mail.png";
import qrImg from "@/assets/images/qrImg.png";
import office from "@/assets/images/office.png";
import "./index.less";
import { queryCompanyInfo, queryContactInfo } from "../../services/index";

interface CompanyPropsInterface {
  setContactState: any;
}
const CompanyInfo = (props: CompanyPropsInterface) => {
  const { setContactState } = props;
  const [companyInfo, setCompanyInfo] = useState<any>([]);
  const [contactInfo, setContactInfo] = useState<any>({});
  const queryLogoFn = async () => {
    const res = await queryCompanyInfo();
    setCompanyInfo(res);
  };

  const queryContactInfoFn = async () => {
    const res = await queryContactInfo();
    setContactInfo(res);
    setContactState(res);
  };
  useEffect(() => {
    queryLogoFn();
    queryContactInfoFn();
  }, []);
  return (
    <div className="company-info-container">
      <div className="company-info">
        <div className="number-area">
          <div className="free-title">
            {contactInfo.servicePhone && contactInfo.servicePhone.dictLabel}
          </div>
          <div className="free-number">
            {contactInfo.servicePhone && contactInfo.servicePhone.dictValue}
          </div>
          <div className="contact-items">
            <img src={telphone} className="contact-icon" />
            <span className="contact-content">
              {contactInfo.telephone && contactInfo.telephone.dictLabel}：
              {contactInfo.telephone && contactInfo.telephone.dictValue}
            </span>
          </div>
          <div className="contact-items">
            <img src={fax} className="contact-icon" />
            <span className="contact-content">
              {contactInfo.fax && contactInfo.fax.dictLabel}：
              {contactInfo.fax && contactInfo.fax.dictValue}
            </span>
          </div>
          <div className="contact-items">
            <img src={contact} className="contact-icon" />
            <span className="contact-content">
              {contactInfo.contact && contactInfo.contact.dictLabel}：
              {contactInfo.contact && contactInfo.contact.dictValue}
            </span>
          </div>
          <div className="contact-items">
            <img src={mail} className="contact-icon" />
            <span className="contact-content">
              {contactInfo.mail && contactInfo.mail.dictLabel}：
              {contactInfo.mail && contactInfo.mail.dictValue}
            </span>
          </div>
        </div>
        <img
          className="qr-img"
          src={companyInfo[0] && companyInfo[0].linkPicUrl}
        />
        <div className="branch-office-container">
          <a href={companyInfo[1] && companyInfo[1].linkUrl}>
            <img
              className="branch-office"
              src={companyInfo[1] && companyInfo[1].linkPicUrl}
            />
          </a>
          <span className="branch-office-title">
            {companyInfo[1] && companyInfo[1].linkTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
