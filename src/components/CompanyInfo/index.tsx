import React, { useState, useEffect } from "react";
import telphone from "@/assets/images/telphone.png";
import fax from "@/assets/images/fax.png";
import contact from "@/assets/images/contact.png";
import mail from "@/assets/images/mail.png";
// import qrImg from "@/assets/images/qrImg.png";
// import office from "@/assets/images/office.png";
import "./index.less";
import { queryCompanyInfo, queryContactInfo } from "../../services/index";

interface CompanyPropsInterface {
  setContactState: any;
}
const CompanyInfo = (props: CompanyPropsInterface) => {
  const { setContactState } = props;
  const [companyInfo, setCompanyInfo] = useState<any>([]);
  const [qrUrl, setQrUrl] = useState("");
  const [branchUrl, setBranchUrl] = useState("");
  const [branchTitle, setBranchTitle] = useState("");
  const [contactInfo, setContactInfo] = useState<any>({});
  const queryLogoFn = async () => {
    const res = await queryCompanyInfo();
    setCompanyInfo(res);
    const qrUrlTemp = res.filter((item: any) => {
      return item.linkType === "0";
    });
    const branchUrlTemp = res.filter((item: any) => {
      return item.linkType === "2";
    });
    setQrUrl(qrUrlTemp[0].linkPicUrl);
    setBranchUrl(branchUrlTemp[0].linkPicUrl);
    setBranchTitle(branchUrlTemp[0].linkTitle);
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
            {contactInfo.servicePhone && contactInfo.servicePhone.remark}
          </div>
          <div className="contact-items">
            <img src={telphone} className="contact-icon" />
            <span className="contact-content">
              {contactInfo.telephone && contactInfo.telephone.dictLabel}：
              {contactInfo.telephone && contactInfo.telephone.remark}
            </span>
          </div>
          <div className="contact-items">
            <img src={fax} className="contact-icon" />
            <span className="contact-content">
              {contactInfo.fax && contactInfo.fax.dictLabel}：
              {contactInfo.fax && contactInfo.fax.remark}
            </span>
          </div>
          <div className="contact-items">
            <img src={contact} className="contact-icon" />
            <span className="contact-content">
              {contactInfo.contact && contactInfo.contact.dictLabel}：
              {contactInfo.contact && contactInfo.contact.remark}
            </span>
          </div>
          <div className="contact-items">
            <img src={mail} className="contact-icon" />
            <span className="contact-content">
              {contactInfo.mail && contactInfo.mail.dictLabel}：
              {contactInfo.mail && contactInfo.mail.remark}
            </span>
          </div>
        </div>
        <img className="qr-img" src={qrUrl} />
        <div className="branch-office-container">
          <a href={companyInfo[1] && companyInfo[1].linkUrl} target="_Blank">
            <img
              className="branch-office"
              src={branchUrl}
              title={branchTitle}
            />
          </a>
          {/* <span className="branch-office-title">{branchTitle}</span> */}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
