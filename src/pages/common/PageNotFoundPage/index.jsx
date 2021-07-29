import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLocaleAction } from "@redux/actions/page-actions";

import {
  Result,
  Button,
  notification,
  message,
} from "antd";

import { i18nTranslate,      i18nLocales } from "@i18n";

export default function PageNotFoundPage() {
  const dispath = useDispatch();

  return (
    <>
      <Result status="404" title="404"
subTitle={i18nTranslate("404")}

                  extra={<Link to="/">Back Home</Link>}
      />
      <hr />
      <p>
        current language:{" "}
        {useSelector((state) => state.page.locale)}
      </p>

      {Object.values(i18nLocales).map((el) => (
        <Fragment key={el.code}>
          <Button
            type="primary"
            onClick={() =>
              dispath(changeLocaleAction(el.code))
            }
          >
            Change Language to {el.text}
          </Button>
          <span>{"  "}</span>
        </Fragment>
      ))}

      <hr />
      <p>messgae test</p>
      <Button onClick={() => message.success("hi")}>
        Create Message
      </Button>

      <hr />
      <p>notification test</p>
      <Button
        onClick={() =>
          notification.open({
            message: "hi",
            description: "hello",
          })
        }
      >
        Create Notification
      </Button>
    </>
  );
}
