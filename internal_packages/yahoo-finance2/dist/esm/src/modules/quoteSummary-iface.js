/*
 * To generate the initial file, we took the output of all submodules for
 * 'AAPL', 'OCDO.L', '0700.HK' and '^IXIC' and ran the results through
 * the awesome https://app.quicktype.io/.
 *
 * Manual cleanup afterwards:
 *
 *  1) Spaces: 4 to 2
 *  ~~2) Wrapped in a module~~ <--- undid this after tooling issues.
 *  3) Alphabeticalize QuoteSummaryResult
 *  4) RawNumberObj type to Date|number for coersion
 */
export var Relation;
(function (Relation) {
  Relation["ChairmanOfTheBoard"] = "Chairman of the Board";
  Relation["ChiefExecutiveOfficer"] = "Chief Executive Officer";
  Relation["ChiefFinancialOfficer"] = "Chief Financial Officer";
  Relation["ChiefOperatingOfficer"] = "Chief Operating Officer";
  Relation["ChiefTechnologyOfficer"] = "Chief Technology Officer";
  Relation["Director"] = "Director";
  Relation["DirectorIndependent"] = "Director (Independent)";
  Relation["Empty"] = "";
  Relation["GeneralCounsel"] = "General Counsel";
  Relation["IndependentNonExecutiveDirector"] =
    "Independent Non-Executive Director";
  Relation["Officer"] = "Officer";
  Relation["President"] = "President";
})(Relation || (Relation = {}));
export var OwnershipEnum;
(function (OwnershipEnum) {
  OwnershipEnum["D"] = "D";
  OwnershipEnum["I"] = "I";
})(OwnershipEnum || (OwnershipEnum = {}));
export var Type;
(function (Type) {
  Type["The10K"] = "10-K";
  Type["The10Q"] = "10-Q";
  Type["The8K"] = "8-K";
  Type["The8KA"] = "8-K/A";
  Type["The10KA"] = "10-K/A";
  Type["The10QA"] = "10-Q/A";
})(Type || (Type = {}));
export var Action;
(function (Action) {
  Action["Down"] = "down";
  Action["Init"] = "init";
  Action["Main"] = "main";
  Action["Reit"] = "reit";
  Action["Up"] = "up";
})(Action || (Action = {}));
export var Grade;
(function (Grade) {
  Grade["Accumulate"] = "Accumulate";
  Grade["Add"] = "Add";
  Grade["Average"] = "Average";
  Grade["BelowAverage"] = "Below Average";
  Grade["Buy"] = "Buy";
  Grade["Empty"] = "";
  Grade["EqualWeight"] = "Equal-Weight";
  Grade["FairValue"] = "Fair Value";
  Grade["GradeEqualWeight"] = "Equal-weight";
  Grade["GradeLongTermBuy"] = "Long-term Buy";
  Grade["Hold"] = "Hold";
  Grade["LongTermBuy"] = "Long-Term Buy";
  Grade["MarketOutperform"] = "Market Outperform";
  Grade["MarketPerform"] = "Market Perform";
  Grade["Mixed"] = "Mixed";
  Grade["Negative"] = "Negative";
  Grade["Neutral"] = "Neutral";
  Grade["InLine"] = "In-Line";
  Grade["Outperform"] = "Outperform";
  Grade["Overweight"] = "Overweight";
  Grade["PeerPerform"] = "Peer Perform";
  Grade["Perform"] = "Perform";
  Grade["Positive"] = "Positive";
  Grade["Reduce"] = "Reduce";
  Grade["SectorOutperform"] = "Sector Outperform";
  Grade["SectorPerform"] = "Sector Perform";
  Grade["SectorWeight"] = "Sector Weight";
  Grade["Sell"] = "Sell";
  Grade["StrongBuy"] = "Strong Buy";
  Grade["TopPick"] = "Top Pick";
  Grade["Underperform"] = "Underperform";
  Grade["Underperformer"] = "Underperformer";
  Grade["Underweight"] = "Underweight";
})(Grade || (Grade = {}));
