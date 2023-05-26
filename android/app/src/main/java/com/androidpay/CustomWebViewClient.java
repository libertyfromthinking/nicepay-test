package com.androidpay;

import android.webkit.WebView;
import android.webkit.WebViewClient;

public class CustomWebViewClient extends WebViewClient {
  @Override
  public boolean shouldOverrideUrlLoading(WebView view, String url) {
    // 커스텀 로직을 추가합니다.

    // 원하는 처리를 수행하고 true 또는 false를 반환합니다.
    // true를 반환하면 WebView가 URL을 처리하지 않으며,
    // false를 반환하면 WebView가 URL을 기본적인 방식으로 처리합니다.

    return super.shouldOverrideUrlLoading(view, url);
  }
}
