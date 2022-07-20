/*
 * highlight.js Structured Text syntax highlighting definition
 *
 * @see https://github.com/highlightjs/highlight.js
 *
 * @package: highlightjs-scl
 * @author:  Siemens Online Support
 * @since:   2020-10-19
 *
 * Description: SCL is one of the 6 languages of IEC 61131-3 standard, for developing PLC programs in SIMATIC STEP 7 / TIA Portal.
 * Category: scripting
 */

var module = module ? module : {};

function hljsDefineSCL(hljs) {
    return {
        aliases: ["iecst", "scl", "stl", "structured-text"],
        name: "SCL / Structured Text",
        case_insensitive: true,
        keywords: {
            code1: "region end_region",
            code2Open: "IF CASE FOR WHILE REPEAT STRUCT var_global VAR_INPUT VAR_OUTPUT var_out VAR_IN_OUT VAR VAR_TEMP VAR CONSTANT VAR_EXTERNAL var_interval var_access var_config DATA_BLOCK TYPE FUNCTION_BLOCK FUNCTION ORGANIZATION_BLOCK PROGRAM BEGIN initial_step program configuration action transition namespace channel library folder resource method property interface",
            code2Middle: "ELSE ELSIF step",
            code2Close: "END_IF END_IF; END_CASE END_CASE; END_FOR END_FOR; END_WHILE END_WHILE; END_REPEAT END_REPEAT; END_STRUCT END_VAR END_CONST END_DATA_BLOCK END_TYPE END_FUNCTION_BLOCK END_FUNCTION END_ORGANIZATION_BLOCK END_PROGRAM end_step end_program end_configuration end_action end_transition end_namespace end_channel end_library end_folder  end_resource end_method end_property end_interface",
            keywords1: "TRUE FALSE OK EN ENO NIL RETURN RET_VAL VOID TO DO BY UNTIL THEN of from CONTINUE EXIT COUNTEREN GOTO LABEL END_LABEL AT BLOCK_DB BLOCK_FB BLOCK_FC BLOCK_SDBOF retain non_retain task with using extend",
            keywords2: "MOD DIV add mul sub ABS SQR SQRT EXP EXPD expt LN LOG ACOS ASIN ATAN COS SIN TAN ROUND TRUNC ROL ROR SHL SHR LEN CONCAT LEFT RIGHT MID INSERT DELETE REPLACE FIND EQ_STRNG NE_STRNG GE_STRNG LE_STRNG GT_STRNG LT_STRNG SEL MAX MIN LIMIT MUX TIMER indexof sizeof adr ref adrinst bitadr trunc move MOVE_BLK_VARIANT MOVE_BLK LOWER_BOUND UPPER_BOUND ARR DIM CountOfElements TypeOf TypeOfElements IS_ARRAY Serialize Deserialize",
            keywords3: "AND OR XOR NOT le ge eq ne ge lt public private protected",
            keywords4:"BCD_TO_DINT BCD_TO_INT BLOCK_DB_TO_WORD BOOL_TO_DINT BOOL_TO_INT BYTE_TO_BOOL BYTE_TO_CHAR BYTE_TO_DINT BYTE_TO_INT CHAR_TO_BYTE CHAR_TO_INT DATE_TO_DINT DINT_TO_BCD DINT_TO_BCD_DWORD DINT_TO_BOOL DINT_TO_BYTE DINT_TO_DATE DINT_TO_DWORD DINT_TO_INT DINT_TO_STRING DINT_TO_TIME DINT_TO_TOD DINT_TO_WORD DWORD_BCD_TO_DINT DWORD_TO_BOOL DWORD_TO_BYTE DWORD_TO_DINT DWORD_TO_INT DWORD_TO_REAL DWORD_TO_WORD INT_TO_BCD INT_TO_BCD_WORD INT_TO_BOOL INT_TO_BYTE INT_TO_CHAR INT_TO_DWORD INT_TO_STRING INT_TO_WORD REAL_TO_DINT REAL_TO_DWORD REAL_TO_INT REAL_TO_STRING STRING_TO_CHAR STRING_TO_DINT STRING_TO_INT STRING_TO_REAL TIME_TO_DINT TOD_TO_DINT WORD_BCD_TO_INT WORD_TO_BLOCK_DB WORD_TO_BOOL WORD_TO_BYTE WORD_TO_DINT WORD_TO_INT TIME_TO_S5TIME S5TIME_TO_TIME",
            keywords5:"A Q PT IN AB QB AD QD AW QW AX QX D D DB DD DW DX E I EB IB ED ID EW IW EX IX M MB MD MW MX PAB PQB PAD PQD PAW PQW PEB PIB PED PID PEW PIW FB FC OB SDB SFC SFB T UDT Z C N SRC_INDEX SRC COUNT DEST_INDEX DEST SRC_VARIABLE DEST_ARRAY POS REQ Offset Length Data SRC_ARRAY DEST_VARIABLE RESULT CONNECT EN_R",
            keywords6:"TITLE VERSION KNOW_HOW_PROTECT AUTHOR FAMILY",
            keywords7:"Variant ANY ref_to any_num any_int any_string db_any POINTER ARRAY BOOL Bool BYTE  WORD Word DWORD DWord LWORD LWord USInt SInt UInt Int UDInt DInt ULInt LInt REAL LREAL LReal CHAR Char WCHAR WChar String STRING  WSTRING DATE DT DTL DATE_AND_TIME TOD S5TIME TIME TIME_OF_DAY LDT ",
            myOperators:":= == = + - &quot; ( ) [ ] { } \ / ^ * , : ; ? ** &amp; &gt; &lt; &lt;&gt; &lt;= &gt;=",
            literal: "false true null ",
        },
        contains: [
            {
                className: "string",
                begin: "'",
                end: "'",
                contains: [hljs.BACKSLASH_ESCAPE, { begin: "''" }],
                relevance: 0
            },
            {
                className: "string",
                begin: '"',
                end: '"',
                contains: [hljs.BACKSLASH_ESCAPE, { begin: '""' }],
                relevance: 0
            },
            {
                // operators
                className: "operators",
                begin: "(:=|==|\\=|\\+=|\\+|-|\\*|/{1,1}(?!/)|\\^|&amp;|\\?|&gt;|&lt;|&|\\<|\\>|,|;|:|{|})"
            },
            {
                // conversion from source *_TO_** destination
                className: "keywords4",
                begin: "(ANY|BOOL|BYTE|D?L?WORD|L?TIME|DATE|DT|TOD|W?CHAR|W?STRING|U?S?D?L?INT|L?REAL)_TO_(BOOL|BYTE|D?L?WORD|L?TIME|DATE|DT|TOD|W?CHAR|W?STRING|U?S?D?L?INT|L?REAL)"
            },
            {
                // conversion just to TO_** destination
                className: "keywords4",
                begin: "TO_(BOOL|BYTE|D?L?WORD|L?TIME|DATE|DT|TOD|W?CHAR|W?STRING|U?S?D?L?INT|L?REAL)"
            },
            {
                className: "number",
                begin: "[a-zA-Z0-9]+#\\-?[a-fA-F0-9_]*",
                relevance: 0
            },
            {
                className: "symbol",
                begin: "(D|T|DT|TOD)#[0-9:\\-_shmyd]*"
            },
            {
                className: "symbol",
                begin: "[a-zA-Z_]+#[a-zA-Z]*"
            },
            {
                className: "symbol",
                begin: "[A-Za-z]{1,6}#[0-9_\\.e\\-]*",
                relevance: 0
            },
            {
                className: "symbol",
                begin: "%(I|Q|M)(X|B|W|D|L)[0-9.]*"
            },
            {
                className: "symbol",
                begin: "%(I|Q|M)[0-9.]*"
            },
            hljs.C_NUMBER_MODE,
            hljs.COMMENT("//", "$"),
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.COMMENT("\\(\\*", "\\*\\)"),
            hljs.COMMENT("\\(/\\*", "\\*/\\)")
        ]
    }
}

module.exports = function (hljs) {
    hljs.registerLanguage("SCL", hljsDefineSCL);
};

module.exports.definer = hljsDefineSCL;
