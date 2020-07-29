/* SmtpJS.com - v3.0.0 */

export const Data = {
  from: "info@rif.ug",
  to: "info@rif.ug",
  SecureToken: "e61b1d9a-0b9e-41ab-aa08-c1e6feb9d3ad",
  // 7b843dcd-83cd-4633-9a84-4cb9b1b4b0d4
};
export const Email = {
  send: function(a) {
    return new Promise(function(n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
        n(e);
      });
    });
  },
  ajaxPost: function(e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function() {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function(e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function() {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function(e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  },
};
