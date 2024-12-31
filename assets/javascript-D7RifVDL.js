var e = [
  Object.freeze({
    displayName: "JavaScript",
    name: "javascript",
    patterns: [
      { include: "#directives" },
      { include: "#statements" },
      { include: "#shebang" },
    ],
    repository: {
      "access-modifier": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "storage.modifier.js",
      },
      "after-operator-block-as-object-literal": {
        begin:
          "(?<!\\+\\+|--)(?<=[:=(,\\[?+!>]|^await|[^\\._$0-9A-Za-z]await|^return|[^\\._$0-9A-Za-z]return|^yield|[^\\._$0-9A-Za-z]yield|^throw|[^\\._$0-9A-Za-z]throw|^in|[^\\._$0-9A-Za-z]in|^of|[^\\._$0-9A-Za-z]of|^typeof|[^\\._$0-9A-Za-z]typeof|&&|\\|\\||\\*)\\s*(\\{)",
        beginCaptures: { 1: { name: "punctuation.definition.block.js" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.js" } },
        name: "meta.objectliteral.js",
        patterns: [{ include: "#object-member" }],
      },
      "array-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.js" },
          2: { name: "punctuation.definition.binding-pattern.array.js" },
        },
        end: "\\]",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.array.js" },
        },
        patterns: [
          { include: "#binding-element" },
          { include: "#punctuation-comma" },
        ],
      },
      "array-binding-pattern-const": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.js" },
          2: { name: "punctuation.definition.binding-pattern.array.js" },
        },
        end: "\\]",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.array.js" },
        },
        patterns: [
          { include: "#binding-element-const" },
          { include: "#punctuation-comma" },
        ],
      },
      "array-literal": {
        begin: "\\s*(\\[)",
        beginCaptures: { 1: { name: "meta.brace.square.js" } },
        end: "\\]",
        endCaptures: { 0: { name: "meta.brace.square.js" } },
        name: "meta.array.literal.js",
        patterns: [
          { include: "#expression" },
          { include: "#punctuation-comma" },
        ],
      },
      "arrow-function": {
        patterns: [
          {
            captures: {
              1: { name: "storage.modifier.async.js" },
              2: { name: "variable.parameter.js" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\s+)?([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?==>)",
            name: "meta.arrow.js",
          },
          {
            begin:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync))?((?<![})!\\]])\\s*(?=((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))",
            beginCaptures: { 1: { name: "storage.modifier.async.js" } },
            end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
            name: "meta.arrow.js",
            patterns: [
              { include: "#comment" },
              { include: "#type-parameters" },
              { include: "#function-parameters" },
              { include: "#arrow-return-type" },
              { include: "#possibly-arrow-return-type" },
            ],
          },
          {
            begin: "=>",
            beginCaptures: { 0: { name: "storage.type.function.arrow.js" } },
            end: "((?<=\\}|\\S)(?<!=>)|((?!\\{)(?=\\S)))(?!\\/[\\/\\*])",
            name: "meta.arrow.js",
            patterns: [
              { include: "#single-line-comment-consuming-line-ending" },
              { include: "#decl-block" },
              { include: "#expression" },
            ],
          },
        ],
      },
      "arrow-return-type": {
        begin: "(?<=\\))\\s*(:)",
        beginCaptures: { 1: { name: "keyword.operator.type.annotation.js" } },
        end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        name: "meta.return.type.arrow.js",
        patterns: [{ include: "#arrow-return-type-body" }],
      },
      "arrow-return-type-body": {
        patterns: [
          {
            begin: "(?<=[:])(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [{ include: "#type-object" }],
          },
          { include: "#type-predicate-operator" },
          { include: "#type" },
        ],
      },
      "async-modifier": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(async)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "storage.modifier.async.js",
      },
      "binding-element": {
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#numeric-literal" },
          { include: "#regex" },
          { include: "#object-binding-pattern" },
          { include: "#array-binding-pattern" },
          { include: "#destructuring-variable-rest" },
          { include: "#variable-initializer" },
        ],
      },
      "binding-element-const": {
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#numeric-literal" },
          { include: "#regex" },
          { include: "#object-binding-pattern-const" },
          { include: "#array-binding-pattern-const" },
          { include: "#destructuring-variable-rest-const" },
          { include: "#variable-initializer" },
        ],
      },
      "boolean-literal": {
        patterns: [
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))true(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "constant.language.boolean.true.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "constant.language.boolean.false.js",
          },
        ],
      },
      brackets: {
        patterns: [
          {
            begin: "{",
            end: "}|(?=\\*/)",
            patterns: [{ include: "#brackets" }],
          },
          {
            begin: "\\[",
            end: "\\]|(?=\\*/)",
            patterns: [{ include: "#brackets" }],
          },
        ],
      },
      cast: { patterns: [{ include: "#jsx" }] },
      "class-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(class)\\b(?=\\s+|/[/*])",
        beginCaptures: {
          1: { name: "keyword.control.export.js" },
          2: { name: "storage.modifier.js" },
          3: { name: "storage.modifier.js" },
          4: { name: "storage.type.class.js" },
        },
        end: "(?<=\\})",
        name: "meta.class.js",
        patterns: [{ include: "#class-declaration-or-expression-patterns" }],
      },
      "class-declaration-or-expression-patterns": {
        patterns: [
          { include: "#comment" },
          { include: "#class-or-interface-heritage" },
          {
            captures: { 0: { name: "entity.name.type.class.js" } },
            match: "[_$A-Za-z][_$0-9A-Za-z]*",
          },
          { include: "#type-parameters" },
          { include: "#class-or-interface-body" },
        ],
      },
      "class-expression": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(class)\\b(?=\\s+|[<{]|\\/[\\/*])",
        beginCaptures: {
          1: { name: "storage.modifier.js" },
          2: { name: "storage.type.class.js" },
        },
        end: "(?<=\\})",
        name: "meta.class.js",
        patterns: [{ include: "#class-declaration-or-expression-patterns" }],
      },
      "class-or-interface-body": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.definition.block.js" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.js" } },
        patterns: [
          { include: "#comment" },
          { include: "#decorator" },
          {
            begin: "(?<=:)\\s*",
            end: "(?=\\s|[;),}\\]:\\-\\+]|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            patterns: [{ include: "#expression" }],
          },
          { include: "#method-declaration" },
          { include: "#indexer-declaration" },
          { include: "#field-declaration" },
          { include: "#string" },
          { include: "#type-annotation" },
          { include: "#variable-initializer" },
          { include: "#access-modifier" },
          { include: "#property-accessor" },
          { include: "#async-modifier" },
          { include: "#after-operator-block-as-object-literal" },
          { include: "#decl-block" },
          { include: "#expression" },
          { include: "#punctuation-comma" },
          { include: "#punctuation-semicolon" },
        ],
      },
      "class-or-interface-heritage": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(extends|implements)\\b)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: { 1: { name: "storage.modifier.js" } },
        end: "(?=\\{)",
        patterns: [
          { include: "#comment" },
          { include: "#class-or-interface-heritage" },
          { include: "#type-parameters" },
          { include: "#expressionWithoutIdentifiers" },
          {
            captures: {
              1: { name: "entity.name.type.module.js" },
              2: { name: "punctuation.accessor.js" },
              3: { name: "punctuation.accessor.optional.js" },
            },
            match:
              "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))(?=\\s*[_$A-Za-z][_$0-9A-Za-z]*(\\s*\\??\\.\\s*[_$A-Za-z][_$0-9A-Za-z]*)*\\s*)",
          },
          {
            captures: { 1: { name: "entity.other.inherited-class.js" } },
            match: "([_$A-Za-z][_$0-9A-Za-z]*)",
          },
          { include: "#expressionPunctuations" },
        ],
      },
      comment: {
        patterns: [
          {
            begin: "/\\*\\*(?!/)",
            beginCaptures: { 0: { name: "punctuation.definition.comment.js" } },
            end: "\\*/",
            endCaptures: { 0: { name: "punctuation.definition.comment.js" } },
            name: "comment.block.documentation.js",
            patterns: [{ include: "#docblock" }],
          },
          {
            begin: "(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?",
            beginCaptures: {
              1: { name: "punctuation.definition.comment.js" },
              2: { name: "storage.type.internaldeclaration.js" },
              3: { name: "punctuation.decorator.internaldeclaration.js" },
            },
            end: "\\*/",
            endCaptures: { 0: { name: "punctuation.definition.comment.js" } },
            name: "comment.block.js",
          },
          {
            begin: "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
            beginCaptures: {
              1: { name: "punctuation.whitespace.comment.leading.js" },
              2: { name: "comment.line.double-slash.js" },
              3: { name: "punctuation.definition.comment.js" },
              4: { name: "storage.type.internaldeclaration.js" },
              5: { name: "punctuation.decorator.internaldeclaration.js" },
            },
            contentName: "comment.line.double-slash.js",
            end: "(?=$)",
          },
        ],
      },
      "control-statement": {
        patterns: [
          { include: "#switch-statement" },
          { include: "#for-loop" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(catch|finally|throw|try)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.trycatch.js",
          },
          {
            captures: {
              1: { name: "keyword.control.loop.js" },
              2: { name: "entity.name.label.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|goto)\\s+([_$A-Za-z][_$0-9A-Za-z]*)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|do|goto|while)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.loop.js",
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: { 0: { name: "keyword.control.flow.js" } },
            end: "(?=[;}]|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            patterns: [{ include: "#expression" }],
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default|switch)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.switch.js",
          },
          { include: "#if-statement" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.conditional.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.with.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.other.debugger.js",
          },
        ],
      },
      "decl-block": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.definition.block.js" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.js" } },
        name: "meta.block.js",
        patterns: [{ include: "#statements" }],
      },
      declaration: {
        patterns: [
          { include: "#decorator" },
          { include: "#var-expr" },
          { include: "#function-declaration" },
          { include: "#class-declaration" },
          { include: "#interface-declaration" },
          { include: "#enum-declaration" },
          { include: "#namespace-declaration" },
          { include: "#type-alias-declaration" },
          { include: "#import-equals-declaration" },
          { include: "#import-declaration" },
          { include: "#export-declaration" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(declare|export)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "storage.modifier.js",
          },
        ],
      },
      decorator: {
        begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))\\@",
        beginCaptures: { 0: { name: "punctuation.decorator.js" } },
        end: "(?=\\s)",
        name: "meta.decorator.js",
        patterns: [{ include: "#expression" }],
      },
      "destructuring-const": {
        patterns: [
          {
            begin:
              "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\{)",
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            name: "meta.object-binding-pattern-variable.js",
            patterns: [
              { include: "#object-binding-pattern-const" },
              { include: "#type-annotation" },
              { include: "#comment" },
            ],
          },
          {
            begin:
              "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\[)",
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            name: "meta.array-binding-pattern-variable.js",
            patterns: [
              { include: "#array-binding-pattern-const" },
              { include: "#type-annotation" },
              { include: "#comment" },
            ],
          },
        ],
      },
      "destructuring-parameter": {
        patterns: [
          {
            begin: "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\{)",
            beginCaptures: {
              1: { name: "keyword.operator.rest.js" },
              2: { name: "punctuation.definition.binding-pattern.object.js" },
            },
            end: "\\}",
            endCaptures: {
              0: { name: "punctuation.definition.binding-pattern.object.js" },
            },
            name: "meta.parameter.object-binding-pattern.js",
            patterns: [{ include: "#parameter-object-binding-element" }],
          },
          {
            begin: "(?<!=|:)\\s*(?:(\\.\\.\\.)\\s*)?(\\[)",
            beginCaptures: {
              1: { name: "keyword.operator.rest.js" },
              2: { name: "punctuation.definition.binding-pattern.array.js" },
            },
            end: "\\]",
            endCaptures: {
              0: { name: "punctuation.definition.binding-pattern.array.js" },
            },
            name: "meta.paramter.array-binding-pattern.js",
            patterns: [
              { include: "#parameter-binding-element" },
              { include: "#punctuation-comma" },
            ],
          },
        ],
      },
      "destructuring-parameter-rest": {
        captures: {
          1: { name: "keyword.operator.rest.js" },
          2: { name: "variable.parameter.js" },
        },
        match: "(?:(\\.\\.\\.)\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)",
      },
      "destructuring-variable": {
        patterns: [
          {
            begin:
              "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\{)",
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            name: "meta.object-binding-pattern-variable.js",
            patterns: [
              { include: "#object-binding-pattern" },
              { include: "#type-annotation" },
              { include: "#comment" },
            ],
          },
          {
            begin:
              "(?<!=|:|^of|[^\\._$0-9A-Za-z]of|^in|[^\\._$0-9A-Za-z]in)\\s*(?=\\[)",
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            name: "meta.array-binding-pattern-variable.js",
            patterns: [
              { include: "#array-binding-pattern" },
              { include: "#type-annotation" },
              { include: "#comment" },
            ],
          },
        ],
      },
      "destructuring-variable-rest": {
        captures: {
          1: { name: "keyword.operator.rest.js" },
          2: {
            name: "meta.definition.variable.js variable.other.readwrite.js",
          },
        },
        match: "(?:(\\.\\.\\.)\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)",
      },
      "destructuring-variable-rest-const": {
        captures: {
          1: { name: "keyword.operator.rest.js" },
          2: { name: "meta.definition.variable.js variable.other.constant.js" },
        },
        match: "(?:(\\.\\.\\.)\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)",
      },
      directives: {
        begin:
          "^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\s*=\\s*((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))+\\s*/>\\s*$)",
        beginCaptures: { 1: { name: "punctuation.definition.comment.js" } },
        end: "(?=$)",
        name: "comment.line.triple-slash.directive.js",
        patterns: [
          {
            begin: "(<)(reference|amd-dependency|amd-module)",
            beginCaptures: {
              1: { name: "punctuation.definition.tag.directive.js" },
              2: { name: "entity.name.tag.directive.js" },
            },
            end: "/>",
            endCaptures: {
              0: { name: "punctuation.definition.tag.directive.js" },
            },
            name: "meta.tag.js",
            patterns: [
              {
                match: "path|types|no-default-lib|lib|name|resolution-mode",
                name: "entity.other.attribute-name.directive.js",
              },
              { match: "=", name: "keyword.operator.assignment.js" },
              { include: "#string" },
            ],
          },
        ],
      },
      docblock: {
        patterns: [
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "constant.language.access-type.jsdoc" },
            },
            match: "((@)(?:access|api))\\s+(private|protected|public)\\b",
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "entity.name.type.instance.jsdoc" },
              4: { name: "punctuation.definition.bracket.angle.begin.jsdoc" },
              5: { name: "constant.other.email.link.underline.jsdoc" },
              6: { name: "punctuation.definition.bracket.angle.end.jsdoc" },
            },
            match:
              "((@)author)\\s+([^@\\s<>*/](?:[^@<>*/]|\\*[^/])*)(?:\\s*(<)([^>\\s]+)(>))?",
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "entity.name.type.instance.jsdoc" },
              4: { name: "keyword.operator.control.jsdoc" },
              5: { name: "entity.name.type.instance.jsdoc" },
            },
            match:
              "((@)borrows)\\s+((?:[^@\\s*/]|\\*[^/])+)\\s+(as)\\s+((?:[^@\\s*/]|\\*[^/])+)",
          },
          {
            begin: "((@)example)\\s+",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            end: "(?=@|\\*/)",
            name: "meta.example.jsdoc",
            patterns: [
              { match: "^\\s\\*\\s+" },
              {
                begin: "\\G(<)caption(>)",
                beginCaptures: {
                  0: { name: "entity.name.tag.inline.jsdoc" },
                  1: {
                    name: "punctuation.definition.bracket.angle.begin.jsdoc",
                  },
                  2: { name: "punctuation.definition.bracket.angle.end.jsdoc" },
                },
                contentName: "constant.other.description.jsdoc",
                end: "(</)caption(>)|(?=\\*/)",
                endCaptures: {
                  0: { name: "entity.name.tag.inline.jsdoc" },
                  1: {
                    name: "punctuation.definition.bracket.angle.begin.jsdoc",
                  },
                  2: { name: "punctuation.definition.bracket.angle.end.jsdoc" },
                },
              },
              {
                captures: { 0: { name: "source.embedded.js" } },
                match: "[^\\s@*](?:[^*]|\\*[^/])*",
              },
            ],
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "constant.language.symbol-type.jsdoc" },
            },
            match:
              "((@)kind)\\s+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\b",
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "variable.other.link.underline.jsdoc" },
              4: { name: "entity.name.type.instance.jsdoc" },
            },
            match:
              "((@)see)\\s+(?:((?=https?://)(?:[^\\s*]|\\*[^/])+)|((?!https?://|(?:\\[[^\\[\\]]*\\])?{@(?:link|linkcode|linkplain|tutorial)\\b)(?:[^@\\s*/]|\\*[^/])+))",
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "variable.other.jsdoc" },
            },
            match:
              "((@)template)\\s+([A-Za-z_$][\\w$.\\[\\]]*(?:\\s*,\\s*[A-Za-z_$][\\w$.\\[\\]]*)*)",
          },
          {
            begin: "((@)template)\\s+(?={)",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              { include: "#jsdoctype" },
              {
                match: "([A-Za-z_$][\\w$.\\[\\]]*)",
                name: "variable.other.jsdoc",
              },
            ],
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "variable.other.jsdoc" },
            },
            match:
              "((@)(?:arg|argument|const|constant|member|namespace|param|var))\\s+([A-Za-z_$][\\w$.\\[\\]]*)",
          },
          {
            begin: "((@)typedef)\\s+(?={)",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              { include: "#jsdoctype" },
              {
                match: "(?:[^@\\s*/]|\\*[^/])+",
                name: "entity.name.type.instance.jsdoc",
              },
            ],
          },
          {
            begin:
              "((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\s+(?={)",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [
              { include: "#jsdoctype" },
              {
                match: "([A-Za-z_$][\\w$.\\[\\]]*)",
                name: "variable.other.jsdoc",
              },
              {
                captures: {
                  1: {
                    name: "punctuation.definition.optional-value.begin.bracket.square.jsdoc",
                  },
                  2: { name: "keyword.operator.assignment.jsdoc" },
                  3: { name: "source.embedded.js" },
                  4: {
                    name: "punctuation.definition.optional-value.end.bracket.square.jsdoc",
                  },
                  5: { name: "invalid.illegal.syntax.jsdoc" },
                },
                match:
                  "(\\[)\\s*[\\w$]+(?:(?:\\[\\])?\\.[\\w$]+)*(?:\\s*(=)\\s*((?>\"(?:(?:\\*(?!/))|(?:\\\\(?!\"))|[^*\\\\])*?\"|'(?:(?:\\*(?!/))|(?:\\\\(?!'))|[^*\\\\])*?'|\\[(?:(?:\\*(?!/))|[^*])*?\\]|(?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])*)*))?\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))",
                name: "variable.other.jsdoc",
              },
            ],
          },
          {
            begin:
              "((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\s+(?={)",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
            patterns: [{ include: "#jsdoctype" }],
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "entity.name.type.instance.jsdoc" },
            },
            match:
              "((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\s+((?:[^{}@\\s*]|\\*[^/])+)",
          },
          {
            begin: "((@)(?:default(?:value)?|license|version))\\s+(([''\"]))",
            beginCaptures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "variable.other.jsdoc" },
              4: { name: "punctuation.definition.string.begin.jsdoc" },
            },
            contentName: "variable.other.jsdoc",
            end: "(\\3)|(?=$|\\*/)",
            endCaptures: {
              0: { name: "variable.other.jsdoc" },
              1: { name: "punctuation.definition.string.end.jsdoc" },
            },
          },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
              3: { name: "variable.other.jsdoc" },
            },
            match:
              "((@)(?:default(?:value)?|license|tutorial|variation|version))\\s+([^\\s*]+)",
          },
          {
            captures: { 1: { name: "punctuation.definition.block.tag.jsdoc" } },
            match:
              "(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\b",
            name: "storage.type.class.jsdoc",
          },
          { include: "#inline-tags" },
          {
            captures: {
              1: { name: "storage.type.class.jsdoc" },
              2: { name: "punctuation.definition.block.tag.jsdoc" },
            },
            match: "((@)(?:[_$A-Za-z][_$0-9A-Za-z]*))(?=\\s+)",
          },
        ],
      },
      "enum-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:\\b(const)\\s+)?\\b(enum)\\s+([_$A-Za-z][_$0-9A-Za-z]*)",
        beginCaptures: {
          1: { name: "keyword.control.export.js" },
          2: { name: "storage.modifier.js" },
          3: { name: "storage.modifier.js" },
          4: { name: "storage.type.enum.js" },
          5: { name: "entity.name.type.enum.js" },
        },
        end: "(?<=\\})",
        name: "meta.enum.declaration.js",
        patterns: [
          { include: "#comment" },
          {
            begin: "\\{",
            beginCaptures: { 0: { name: "punctuation.definition.block.js" } },
            end: "\\}",
            endCaptures: { 0: { name: "punctuation.definition.block.js" } },
            patterns: [
              { include: "#comment" },
              {
                begin: "([_$A-Za-z][_$0-9A-Za-z]*)",
                beginCaptures: { 0: { name: "variable.other.enummember.js" } },
                end: "(?=,|\\}|$)",
                patterns: [
                  { include: "#comment" },
                  { include: "#variable-initializer" },
                ],
              },
              {
                begin:
                  "(?=((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\])))",
                end: "(?=,|\\}|$)",
                patterns: [
                  { include: "#string" },
                  { include: "#array-literal" },
                  { include: "#comment" },
                  { include: "#variable-initializer" },
                ],
              },
              { include: "#punctuation-comma" },
            ],
          },
        ],
      },
      "export-declaration": {
        patterns: [
          {
            captures: {
              1: { name: "keyword.control.export.js" },
              2: { name: "keyword.control.as.js" },
              3: { name: "storage.type.namespace.js" },
              4: { name: "entity.name.type.module.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)\\s+(as)\\s+(namespace)\\s+([_$A-Za-z][_$0-9A-Za-z]*)",
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))",
            beginCaptures: {
              1: { name: "keyword.control.export.js" },
              2: { name: "keyword.control.type.js" },
              3: { name: "keyword.operator.assignment.js" },
              4: { name: "keyword.control.default.js" },
            },
            end: "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            name: "meta.export.default.js",
            patterns: [
              { include: "#interface-declaration" },
              { include: "#expression" },
            ],
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\s+(type))?\\b(?!(\\$)|(\\s*:))((?=\\s*[\\{*])|((?=\\s*[_$A-Za-z][_$0-9A-Za-z]*(\\s|,))(?!\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            beginCaptures: {
              1: { name: "keyword.control.export.js" },
              2: { name: "keyword.control.type.js" },
            },
            end: "(?=$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            name: "meta.export.js",
            patterns: [{ include: "#import-export-declaration" }],
          },
        ],
      },
      expression: {
        patterns: [
          { include: "#expressionWithoutIdentifiers" },
          { include: "#identifiers" },
          { include: "#expressionPunctuations" },
        ],
      },
      "expression-inside-possibly-arrow-parens": {
        patterns: [
          { include: "#expressionWithoutIdentifiers" },
          { include: "#comment" },
          { include: "#string" },
          { include: "#decorator" },
          { include: "#destructuring-parameter" },
          {
            captures: { 1: { name: "storage.modifier.js" } },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)",
          },
          {
            captures: {
              1: { name: "storage.modifier.js" },
              2: { name: "keyword.operator.rest.js" },
              3: { name: "entity.name.function.js variable.language.this.js" },
              4: { name: "entity.name.function.js" },
              5: { name: "keyword.operator.optional.js" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
          },
          {
            captures: {
              1: { name: "storage.modifier.js" },
              2: { name: "keyword.operator.rest.js" },
              3: { name: "variable.parameter.js variable.language.this.js" },
              4: { name: "variable.parameter.js" },
              5: { name: "keyword.operator.optional.js" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*[:,]|$)",
          },
          { include: "#type-annotation" },
          { include: "#variable-initializer" },
          { match: ",", name: "punctuation.separator.parameter.js" },
          { include: "#identifiers" },
          { include: "#expressionPunctuations" },
        ],
      },
      "expression-operators": {
        patterns: [
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(await)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.control.flow.js",
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*\\*)",
            beginCaptures: { 1: { name: "keyword.control.flow.js" } },
            end: "\\*",
            endCaptures: { 0: { name: "keyword.generator.asterisk.js" } },
            patterns: [{ include: "#comment" }],
          },
          {
            captures: {
              1: { name: "keyword.control.flow.js" },
              2: { name: "keyword.generator.asterisk.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s*(\\*))?",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))delete(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.expression.delete.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()",
            name: "keyword.operator.expression.in.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()",
            name: "keyword.operator.expression.of.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.expression.instanceof.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.new.js",
          },
          { include: "#typeof-operator" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.expression.void.js",
          },
          {
            captures: {
              1: { name: "keyword.control.as.js" },
              2: { name: "storage.modifier.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*($|[;,:})\\]]))",
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",
            beginCaptures: {
              1: { name: "keyword.control.as.js" },
              2: { name: "keyword.control.satisfies.js" },
            },
            end: "(?=^|[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisfies)\\s+)|(\\s+\\<))",
            patterns: [{ include: "#type" }],
          },
          { match: "\\.\\.\\.", name: "keyword.operator.spread.js" },
          {
            match: "\\*=|(?<!\\()/=|%=|\\+=|\\-=",
            name: "keyword.operator.assignment.compound.js",
          },
          {
            match: "\\&=|\\^=|<<=|>>=|>>>=|\\|=",
            name: "keyword.operator.assignment.compound.bitwise.js",
          },
          { match: "<<|>>>|>>", name: "keyword.operator.bitwise.shift.js" },
          { match: "===|!==|==|!=", name: "keyword.operator.comparison.js" },
          { match: "<=|>=|<>|<|>", name: "keyword.operator.relational.js" },
          {
            captures: {
              1: { name: "keyword.operator.logical.js" },
              2: { name: "keyword.operator.assignment.compound.js" },
              3: { name: "keyword.operator.arithmetic.js" },
            },
            match: "(?<=[_$0-9A-Za-z])(\\!)\\s*(?:(/=)|(?:(/)(?![/*])))",
          },
          {
            match: "\\!|&&|\\|\\||\\?\\?",
            name: "keyword.operator.logical.js",
          },
          { match: "\\&|~|\\^|\\|", name: "keyword.operator.bitwise.js" },
          { match: "\\=", name: "keyword.operator.assignment.js" },
          { match: "--", name: "keyword.operator.decrement.js" },
          { match: "\\+\\+", name: "keyword.operator.increment.js" },
          { match: "%|\\*|/|-|\\+", name: "keyword.operator.arithmetic.js" },
          {
            begin:
              "(?<=[_$0-9A-Za-z)\\]])\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)+(?:(/=)|(?:(/)(?![/*]))))",
            end: "(?:(/=)|(?:(/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/)))",
            endCaptures: {
              1: { name: "keyword.operator.assignment.compound.js" },
              2: { name: "keyword.operator.arithmetic.js" },
            },
            patterns: [{ include: "#comment" }],
          },
          {
            captures: {
              1: { name: "keyword.operator.assignment.compound.js" },
              2: { name: "keyword.operator.arithmetic.js" },
            },
            match: "(?<=[_$0-9A-Za-z)\\]])\\s*(?:(/=)|(?:(/)(?![/*])))",
          },
        ],
      },
      expressionPunctuations: {
        patterns: [
          { include: "#punctuation-comma" },
          { include: "#punctuation-accessor" },
        ],
      },
      expressionWithoutIdentifiers: {
        patterns: [
          { include: "#jsx" },
          { include: "#string" },
          { include: "#regex" },
          { include: "#comment" },
          { include: "#function-expression" },
          { include: "#class-expression" },
          { include: "#arrow-function" },
          { include: "#paren-expression-possibly-arrow" },
          { include: "#cast" },
          { include: "#ternary-expression" },
          { include: "#new-expr" },
          { include: "#instanceof-expr" },
          { include: "#object-literal" },
          { include: "#expression-operators" },
          { include: "#function-call" },
          { include: "#literal" },
          { include: "#support-objects" },
          { include: "#paren-expression" },
        ],
      },
      "field-declaration": {
        begin:
          "(?<!\\()(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s+)?(?=\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|(\\#?[_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|\\}|$))",
        beginCaptures: { 1: { name: "storage.modifier.js" } },
        end: "(?=\\}|;|,|$|(^(?!\\s*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|(\\#?[_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(?:(?:(\\?)|(\\!))\\s*)?(=|:|;|,|$))))|(?<=\\})",
        name: "meta.field.declaration.js",
        patterns: [
          { include: "#variable-initializer" },
          { include: "#type-annotation" },
          { include: "#string" },
          { include: "#array-literal" },
          { include: "#numeric-literal" },
          { include: "#comment" },
          {
            captures: {
              1: {
                name: "meta.definition.property.js entity.name.function.js",
              },
              2: { name: "keyword.operator.optional.js" },
              3: { name: "keyword.operator.definiteassignment.js" },
            },
            match:
              "(\\#?[_$A-Za-z][_$0-9A-Za-z]*)(?:(\\?)|(\\!))?(?=\\s*\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
          },
          {
            match: "\\#?[_$A-Za-z][_$0-9A-Za-z]*",
            name: "meta.definition.property.js variable.object.property.js",
          },
          { match: "\\?", name: "keyword.operator.optional.js" },
          { match: "\\!", name: "keyword.operator.definiteassignment.js" },
        ],
      },
      "for-loop": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\s+|(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*))await)?\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)?(\\())",
        beginCaptures: { 0: { name: "keyword.control.loop.js" } },
        end: "(?<=\\))",
        patterns: [
          { include: "#comment" },
          { match: "await", name: "keyword.control.loop.js" },
          {
            begin: "\\(",
            beginCaptures: { 0: { name: "meta.brace.round.js" } },
            end: "\\)",
            endCaptures: { 0: { name: "meta.brace.round.js" } },
            patterns: [
              { include: "#var-expr" },
              { include: "#expression" },
              { include: "#punctuation-semicolon" },
            ],
          },
        ],
      },
      "function-body": {
        patterns: [
          { include: "#comment" },
          { include: "#type-parameters" },
          { include: "#function-parameters" },
          { include: "#return-type" },
          { include: "#type-function-return-type" },
          { include: "#decl-block" },
          { match: "\\*", name: "keyword.generator.asterisk.js" },
        ],
      },
      "function-call": {
        patterns: [
          {
            begin:
              "(?=(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
            end: "(?<=\\))(?!(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
            patterns: [
              {
                begin:
                  "(?=(([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))",
                end: "(?=\\s*(?:(\\?\\.\\s*)|(\\!))?((<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?\\())",
                name: "meta.function-call.js",
                patterns: [{ include: "#function-call-target" }],
              },
              { include: "#comment" },
              { include: "#function-call-optionals" },
              { include: "#type-arguments" },
              { include: "#paren-expression" },
            ],
          },
          {
            begin:
              "(?=(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",
            end: "(?<=\\>)(?!(((([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))|(?<=[\\)]))(<\\s*[\\{\\[\\(]\\s*$))",
            patterns: [
              {
                begin:
                  "(?=(([_$A-Za-z][_$0-9A-Za-z]*)(\\s*\\??\\.\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*))*)|(\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*))",
                end: "(?=(<\\s*[\\{\\[\\(]\\s*$))",
                name: "meta.function-call.js",
                patterns: [{ include: "#function-call-target" }],
              },
              { include: "#comment" },
              { include: "#function-call-optionals" },
              { include: "#type-arguments" },
            ],
          },
        ],
      },
      "function-call-optionals": {
        patterns: [
          {
            match: "\\?\\.",
            name: "meta.function-call.js punctuation.accessor.optional.js",
          },
          {
            match: "\\!",
            name: "meta.function-call.js keyword.operator.definiteassignment.js",
          },
        ],
      },
      "function-call-target": {
        patterns: [
          { include: "#support-function-call-identifiers" },
          {
            match: "(\\#?[_$A-Za-z][_$0-9A-Za-z]*)",
            name: "entity.name.function.js",
          },
        ],
      },
      "function-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$A-Za-z][_$0-9A-Za-z]*))?\\s*",
        beginCaptures: {
          1: { name: "keyword.control.export.js" },
          2: { name: "storage.modifier.js" },
          3: { name: "storage.modifier.async.js" },
          4: { name: "storage.type.function.js" },
          5: { name: "keyword.generator.asterisk.js" },
          6: { name: "meta.definition.function.js entity.name.function.js" },
        },
        end: "(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|(?<=\\})",
        name: "meta.function.js",
        patterns: [
          { include: "#function-name" },
          { include: "#function-body" },
        ],
      },
      "function-expression": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$A-Za-z][_$0-9A-Za-z]*))?\\s*",
        beginCaptures: {
          1: { name: "storage.modifier.async.js" },
          2: { name: "storage.type.function.js" },
          3: { name: "keyword.generator.asterisk.js" },
          4: { name: "meta.definition.function.js entity.name.function.js" },
        },
        end: "(?=;)|(?<=\\})",
        name: "meta.function.expression.js",
        patterns: [
          { include: "#function-name" },
          { include: "#single-line-comment-consuming-line-ending" },
          { include: "#function-body" },
        ],
      },
      "function-name": {
        match: "[_$A-Za-z][_$0-9A-Za-z]*",
        name: "meta.definition.function.js entity.name.function.js",
      },
      "function-parameters": {
        begin: "\\(",
        beginCaptures: {
          0: { name: "punctuation.definition.parameters.begin.js" },
        },
        end: "\\)",
        endCaptures: {
          0: { name: "punctuation.definition.parameters.end.js" },
        },
        name: "meta.parameters.js",
        patterns: [{ include: "#function-parameters-body" }],
      },
      "function-parameters-body": {
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#decorator" },
          { include: "#destructuring-parameter" },
          { include: "#parameter-name" },
          { include: "#parameter-type-annotation" },
          { include: "#variable-initializer" },
          { match: ",", name: "punctuation.separator.parameter.js" },
        ],
      },
      identifiers: {
        patterns: [
          { include: "#object-identifiers" },
          {
            captures: {
              1: { name: "punctuation.accessor.js" },
              2: { name: "punctuation.accessor.optional.js" },
              3: { name: "entity.name.function.js" },
            },
            match:
              "(?:(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*)?([_$A-Za-z][_$0-9A-Za-z]*)(?=\\s*=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))",
          },
          {
            captures: {
              1: { name: "punctuation.accessor.js" },
              2: { name: "punctuation.accessor.optional.js" },
              3: { name: "variable.other.constant.property.js" },
            },
            match:
              "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(\\#?[A-Z][_$\\dA-Z]*)(?![_$0-9A-Za-z])",
          },
          {
            captures: {
              1: { name: "punctuation.accessor.js" },
              2: { name: "punctuation.accessor.optional.js" },
              3: { name: "variable.other.property.js" },
            },
            match:
              "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(\\#?[_$A-Za-z][_$0-9A-Za-z]*)",
          },
          {
            match: "([A-Z][_$\\dA-Z]*)(?![_$0-9A-Za-z])",
            name: "variable.other.constant.js",
          },
          {
            match: "[_$A-Za-z][_$0-9A-Za-z]*",
            name: "variable.other.readwrite.js",
          },
        ],
      },
      "if-statement": {
        patterns: [
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bif\\s*(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))\\s*(?!\\{))",
            end: "(?=;|$|\\})",
            patterns: [
              { include: "#comment" },
              {
                begin:
                  "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(if)\\s*(\\()",
                beginCaptures: {
                  1: { name: "keyword.control.conditional.js" },
                  2: { name: "meta.brace.round.js" },
                },
                end: "\\)",
                endCaptures: { 0: { name: "meta.brace.round.js" } },
                patterns: [{ include: "#expression" }],
              },
              {
                begin:
                  "(?<=\\))\\s*\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
                beginCaptures: {
                  0: { name: "punctuation.definition.string.begin.js" },
                },
                end: "(/)([dgimsuy]*)",
                endCaptures: {
                  1: { name: "punctuation.definition.string.end.js" },
                  2: { name: "keyword.other.js" },
                },
                name: "string.regexp.js",
                patterns: [{ include: "#regexp" }],
              },
              { include: "#statements" },
            ],
          },
        ],
      },
      "import-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type)(?!\\s+from))?(?!\\s*[:\\(])(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: { name: "keyword.control.export.js" },
          2: { name: "storage.modifier.js" },
          3: { name: "keyword.control.import.js" },
          4: { name: "keyword.control.type.js" },
        },
        end: "(?<!^import|[^\\._$0-9A-Za-z]import)(?=;|$|^)",
        name: "meta.import.js",
        patterns: [
          { include: "#single-line-comment-consuming-line-ending" },
          { include: "#comment" },
          { include: "#string" },
          {
            begin: "(?<=^import|[^\\._$0-9A-Za-z]import)(?!\\s*[\"'])",
            end: "\\bfrom\\b",
            endCaptures: { 0: { name: "keyword.control.from.js" } },
            patterns: [{ include: "#import-export-declaration" }],
          },
          { include: "#import-export-declaration" },
        ],
      },
      "import-equals-declaration": {
        patterns: [
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$A-Za-z][_$0-9A-Za-z]*)\\s*(=)\\s*(require)\\s*(\\()",
            beginCaptures: {
              1: { name: "keyword.control.export.js" },
              2: { name: "storage.modifier.js" },
              3: { name: "keyword.control.import.js" },
              4: { name: "keyword.control.type.js" },
              5: { name: "variable.other.readwrite.alias.js" },
              6: { name: "keyword.operator.assignment.js" },
              7: { name: "keyword.control.require.js" },
              8: { name: "meta.brace.round.js" },
            },
            end: "\\)",
            endCaptures: { 0: { name: "meta.brace.round.js" } },
            name: "meta.import-equals.external.js",
            patterns: [{ include: "#comment" }, { include: "#string" }],
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(import)(?:\\s+(type))?\\s+([_$A-Za-z][_$0-9A-Za-z]*)\\s*(=)\\s*(?!require\\b)",
            beginCaptures: {
              1: { name: "keyword.control.export.js" },
              2: { name: "storage.modifier.js" },
              3: { name: "keyword.control.import.js" },
              4: { name: "keyword.control.type.js" },
              5: { name: "variable.other.readwrite.alias.js" },
              6: { name: "keyword.operator.assignment.js" },
            },
            end: "(?=;|$|^)",
            name: "meta.import-equals.internal.js",
            patterns: [
              { include: "#single-line-comment-consuming-line-ending" },
              { include: "#comment" },
              {
                captures: {
                  1: { name: "entity.name.type.module.js" },
                  2: { name: "punctuation.accessor.js" },
                  3: { name: "punctuation.accessor.optional.js" },
                },
                match:
                  "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))",
              },
              {
                match: "([_$A-Za-z][_$0-9A-Za-z]*)",
                name: "variable.other.readwrite.js",
              },
            ],
          },
        ],
      },
      "import-export-assert-clause": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(with)|(assert))\\s*(\\{)",
        beginCaptures: {
          1: { name: "keyword.control.with.js" },
          2: { name: "keyword.control.assert.js" },
          3: { name: "punctuation.definition.block.js" },
        },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.js" } },
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          {
            match:
              "(?:[_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            name: "meta.object-literal.key.js",
          },
          { match: ":", name: "punctuation.separator.key-value.js" },
        ],
      },
      "import-export-block": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.definition.block.js" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.js" } },
        name: "meta.block.js",
        patterns: [{ include: "#import-export-clause" }],
      },
      "import-export-clause": {
        patterns: [
          { include: "#comment" },
          {
            captures: {
              1: { name: "keyword.control.type.js" },
              2: { name: "keyword.control.default.js" },
              3: { name: "constant.language.import-export-all.js" },
              4: { name: "variable.other.readwrite.js" },
              5: { name: "keyword.control.as.js" },
              6: { name: "keyword.control.default.js" },
              7: { name: "variable.other.readwrite.alias.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(?:(\\btype)\\s+)?(?:(\\bdefault)|(\\*)|(\\b[_$A-Za-z][_$0-9A-Za-z]*)))\\s+(as)\\s+(?:(default(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|([_$A-Za-z][_$0-9A-Za-z]*))",
          },
          { include: "#punctuation-comma" },
          { match: "\\*", name: "constant.language.import-export-all.js" },
          { match: "\\b(default)\\b", name: "keyword.control.default.js" },
          {
            captures: {
              1: { name: "keyword.control.type.js" },
              2: { name: "variable.other.readwrite.alias.js" },
            },
            match: "(?:(\\btype)\\s+)?([_$A-Za-z][_$0-9A-Za-z]*)",
          },
        ],
      },
      "import-export-declaration": {
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#import-export-block" },
          { match: "\\bfrom\\b", name: "keyword.control.from.js" },
          { include: "#import-export-assert-clause" },
          { include: "#import-export-clause" },
        ],
      },
      "indexer-declaration": {
        begin:
          "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\s*)?\\s*(\\[)\\s*([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=:)",
        beginCaptures: {
          1: { name: "storage.modifier.js" },
          2: { name: "meta.brace.square.js" },
          3: { name: "variable.parameter.js" },
        },
        end: "(\\])\\s*(\\?\\s*)?|$",
        endCaptures: {
          1: { name: "meta.brace.square.js" },
          2: { name: "keyword.operator.optional.js" },
        },
        name: "meta.indexer.declaration.js",
        patterns: [{ include: "#type-annotation" }],
      },
      "indexer-mapped-type-declaration": {
        begin:
          "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))([+-])?(readonly)\\s*)?\\s*(\\[)\\s*([_$A-Za-z][_$0-9A-Za-z]*)\\s+(in)\\s+",
        beginCaptures: {
          1: { name: "keyword.operator.type.modifier.js" },
          2: { name: "storage.modifier.js" },
          3: { name: "meta.brace.square.js" },
          4: { name: "entity.name.type.js" },
          5: { name: "keyword.operator.expression.in.js" },
        },
        end: "(\\])([+-])?\\s*(\\?\\s*)?|$",
        endCaptures: {
          1: { name: "meta.brace.square.js" },
          2: { name: "keyword.operator.type.modifier.js" },
          3: { name: "keyword.operator.optional.js" },
        },
        name: "meta.indexer.mappedtype.declaration.js",
        patterns: [
          {
            captures: { 1: { name: "keyword.control.as.js" } },
            match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+",
          },
          { include: "#type" },
        ],
      },
      "inline-tags": {
        patterns: [
          {
            captures: {
              1: { name: "punctuation.definition.bracket.square.begin.jsdoc" },
              2: { name: "punctuation.definition.bracket.square.end.jsdoc" },
            },
            match:
              "(\\[)[^\\]]+(\\])(?={@(?:link|linkcode|linkplain|tutorial))",
            name: "constant.other.description.jsdoc",
          },
          {
            begin: "({)((@)(?:link(?:code|plain)?|tutorial))\\s*",
            beginCaptures: {
              1: { name: "punctuation.definition.bracket.curly.begin.jsdoc" },
              2: { name: "storage.type.class.jsdoc" },
              3: { name: "punctuation.definition.inline.tag.jsdoc" },
            },
            end: "}|(?=\\*/)",
            endCaptures: {
              0: { name: "punctuation.definition.bracket.curly.end.jsdoc" },
            },
            name: "entity.name.type.instance.jsdoc",
            patterns: [
              {
                captures: {
                  1: { name: "variable.other.link.underline.jsdoc" },
                  2: { name: "punctuation.separator.pipe.jsdoc" },
                },
                match: "\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?",
              },
              {
                captures: {
                  1: { name: "variable.other.description.jsdoc" },
                  2: { name: "punctuation.separator.pipe.jsdoc" },
                },
                match: "\\G((?:[^{}@\\s|*]|\\*[^/])+)(\\|)?",
              },
            ],
          },
        ],
      },
      "instanceof-expr": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(instanceof)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: {
          1: { name: "keyword.operator.expression.instanceof.js" },
        },
        end: "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|(===|!==|==|!=)|(([\\&\\~\\^\\|]\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s+instanceof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$A-Za-z][_$0-9A-Za-z]*)|(\\s*[\\(]))))",
        patterns: [{ include: "#type" }],
      },
      "interface-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(?:(abstract)\\s+)?\\b(interface)\\b(?=\\s+|/[/*])",
        beginCaptures: {
          1: { name: "keyword.control.export.js" },
          2: { name: "storage.modifier.js" },
          3: { name: "storage.modifier.js" },
          4: { name: "storage.type.interface.js" },
        },
        end: "(?<=\\})",
        name: "meta.interface.js",
        patterns: [
          { include: "#comment" },
          { include: "#class-or-interface-heritage" },
          {
            captures: { 0: { name: "entity.name.type.interface.js" } },
            match: "[_$A-Za-z][_$0-9A-Za-z]*",
          },
          { include: "#type-parameters" },
          { include: "#class-or-interface-body" },
        ],
      },
      jsdoctype: {
        patterns: [
          {
            begin: "\\G({)",
            beginCaptures: {
              0: { name: "entity.name.type.instance.jsdoc" },
              1: { name: "punctuation.definition.bracket.curly.begin.jsdoc" },
            },
            contentName: "entity.name.type.instance.jsdoc",
            end: "((}))\\s*|(?=\\*/)",
            endCaptures: {
              1: { name: "entity.name.type.instance.jsdoc" },
              2: { name: "punctuation.definition.bracket.curly.end.jsdoc" },
            },
            patterns: [{ include: "#brackets" }],
          },
        ],
      },
      jsx: {
        patterns: [
          { include: "#jsx-tag-without-attributes-in-expression" },
          { include: "#jsx-tag-in-expression" },
        ],
      },
      "jsx-children": {
        patterns: [
          { include: "#jsx-tag-without-attributes" },
          { include: "#jsx-tag" },
          { include: "#jsx-evaluated-code" },
          { include: "#jsx-entities" },
        ],
      },
      "jsx-entities": {
        patterns: [
          {
            captures: {
              1: { name: "punctuation.definition.entity.js" },
              3: { name: "punctuation.definition.entity.js" },
            },
            match: "(&)([a-zA-Z0-9]+|#\\d+|#x[0-9a-fA-F]+)(;)",
            name: "constant.character.entity.js",
          },
        ],
      },
      "jsx-evaluated-code": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.section.embedded.begin.js" } },
        contentName: "meta.embedded.expression.js",
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.section.embedded.end.js" } },
        patterns: [{ include: "#expression" }],
      },
      "jsx-string-double-quoted": {
        begin: '"',
        beginCaptures: {
          0: { name: "punctuation.definition.string.begin.js" },
        },
        end: '"',
        endCaptures: { 0: { name: "punctuation.definition.string.end.js" } },
        name: "string.quoted.double.js",
        patterns: [{ include: "#jsx-entities" }],
      },
      "jsx-string-single-quoted": {
        begin: "'",
        beginCaptures: {
          0: { name: "punctuation.definition.string.begin.js" },
        },
        end: "'",
        endCaptures: { 0: { name: "punctuation.definition.string.end.js" } },
        name: "string.quoted.single.js",
        patterns: [{ include: "#jsx-entities" }],
      },
      "jsx-tag": {
        begin:
          "(?=(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        end: "(/>)|(?:(</)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))?\\s*(>))",
        endCaptures: {
          1: { name: "punctuation.definition.tag.end.js" },
          2: { name: "punctuation.definition.tag.begin.js" },
          3: { name: "entity.name.tag.namespace.js" },
          4: { name: "punctuation.separator.namespace.js" },
          5: { name: "entity.name.tag.js" },
          6: { name: "support.class.component.js" },
          7: { name: "punctuation.definition.tag.end.js" },
        },
        name: "meta.tag.js",
        patterns: [
          {
            begin:
              "(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>)",
            beginCaptures: {
              1: { name: "punctuation.definition.tag.begin.js" },
              2: { name: "entity.name.tag.namespace.js" },
              3: { name: "punctuation.separator.namespace.js" },
              4: { name: "entity.name.tag.js" },
              5: { name: "support.class.component.js" },
            },
            end: "(?=[/]?>)",
            patterns: [
              { include: "#comment" },
              { include: "#type-arguments" },
              { include: "#jsx-tag-attributes" },
            ],
          },
          {
            begin: "(>)",
            beginCaptures: { 1: { name: "punctuation.definition.tag.end.js" } },
            contentName: "meta.jsx.children.js",
            end: "(?=</)",
            patterns: [{ include: "#jsx-children" }],
          },
        ],
      },
      "jsx-tag-attribute-assignment": {
        match: "=(?=\\s*(?:'|\"|{|/\\*|//|\\n))",
        name: "keyword.operator.assignment.js",
      },
      "jsx-tag-attribute-name": {
        captures: {
          1: { name: "entity.other.attribute-name.namespace.js" },
          2: { name: "punctuation.separator.namespace.js" },
          3: { name: "entity.other.attribute-name.js" },
        },
        match:
          "\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(:))?([_$A-Za-z][-_$0-9A-Za-z]*)(?=\\s|=|/?>|/\\*|//)",
      },
      "jsx-tag-attributes": {
        begin: "\\s+",
        end: "(?=[/]?>)",
        name: "meta.tag.attributes.js",
        patterns: [
          { include: "#comment" },
          { include: "#jsx-tag-attribute-name" },
          { include: "#jsx-tag-attribute-assignment" },
          { include: "#jsx-string-double-quoted" },
          { include: "#jsx-string-single-quoted" },
          { include: "#jsx-evaluated-code" },
          { include: "#jsx-tag-attributes-illegal" },
        ],
      },
      "jsx-tag-attributes-illegal": {
        match: "\\S+",
        name: "invalid.illegal.attribute.js",
      },
      "jsx-tag-in-expression": {
        begin:
          "(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$0-9A-Za-z]await|^return|[^\\._$0-9A-Za-z]return|^default|[^\\._$0-9A-Za-z]default|^yield|[^\\._$0-9A-Za-z]yield|^)\\s*(?!<\\s*[_$A-Za-z][_$0-9A-Za-z]*((\\s+extends\\s+[^=>])|,))(?=(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        end: "(?!(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))(?=((<\\s*)|(\\s+))(?!\\?)|\\/?>))",
        patterns: [{ include: "#jsx-tag" }],
      },
      "jsx-tag-without-attributes": {
        begin:
          "(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))?\\s*(>)",
        beginCaptures: {
          1: { name: "punctuation.definition.tag.begin.js" },
          2: { name: "entity.name.tag.namespace.js" },
          3: { name: "punctuation.separator.namespace.js" },
          4: { name: "entity.name.tag.js" },
          5: { name: "support.class.component.js" },
          6: { name: "punctuation.definition.tag.end.js" },
        },
        contentName: "meta.jsx.children.js",
        end: "(</)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))?\\s*(>)",
        endCaptures: {
          1: { name: "punctuation.definition.tag.begin.js" },
          2: { name: "entity.name.tag.namespace.js" },
          3: { name: "punctuation.separator.namespace.js" },
          4: { name: "entity.name.tag.js" },
          5: { name: "support.class.component.js" },
          6: { name: "punctuation.definition.tag.end.js" },
        },
        name: "meta.tag.without-attributes.js",
        patterns: [{ include: "#jsx-children" }],
      },
      "jsx-tag-without-attributes-in-expression": {
        begin:
          "(?<!\\+\\+|--)(?<=[({\\[,?=>:*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._$0-9A-Za-z]await|^return|[^\\._$0-9A-Za-z]return|^default|[^\\._$0-9A-Za-z]default|^yield|[^\\._$0-9A-Za-z]yield|^)\\s*(?=(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))?\\s*(>))",
        end: "(?!(<)\\s*(?:([_$A-Za-z][-_$0-9A-Za-z.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_$A-Za-z][-_$0-9A-Za-z.]*))(?<!\\.|-))?\\s*(>))",
        patterns: [{ include: "#jsx-tag-without-attributes" }],
      },
      label: {
        patterns: [
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(:)(?=\\s*\\{)",
            beginCaptures: {
              1: { name: "entity.name.label.js" },
              2: { name: "punctuation.separator.label.js" },
            },
            end: "(?<=\\})",
            patterns: [{ include: "#decl-block" }],
          },
          {
            captures: {
              1: { name: "entity.name.label.js" },
              2: { name: "punctuation.separator.label.js" },
            },
            match: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(:)",
          },
        ],
      },
      literal: {
        patterns: [
          { include: "#numeric-literal" },
          { include: "#boolean-literal" },
          { include: "#null-literal" },
          { include: "#undefined-literal" },
          { include: "#numericConstant-literal" },
          { include: "#array-literal" },
          { include: "#this-literal" },
          { include: "#super-literal" },
        ],
      },
      "method-declaration": {
        patterns: [
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?\\s*\\b(constructor)\\b(?!:)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: {
              1: { name: "storage.modifier.js" },
              2: { name: "storage.modifier.js" },
              3: { name: "storage.modifier.js" },
              4: { name: "storage.modifier.async.js" },
              5: { name: "storage.type.js" },
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            name: "meta.method.declaration.js",
            patterns: [
              { include: "#method-declaration-name" },
              { include: "#function-body" },
            ],
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:(?:\\s*\\b(new)\\b(?!:)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(?:(\\*)\\s*)?)(?=\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: { name: "storage.modifier.js" },
              2: { name: "storage.modifier.js" },
              3: { name: "storage.modifier.js" },
              4: { name: "storage.modifier.async.js" },
              5: { name: "keyword.operator.new.js" },
              6: { name: "keyword.generator.asterisk.js" },
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            name: "meta.method.declaration.js",
            patterns: [
              { include: "#method-declaration-name" },
              { include: "#function-body" },
            ],
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\s+)?(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: { name: "storage.modifier.js" },
              2: { name: "storage.modifier.js" },
              3: { name: "storage.modifier.js" },
              4: { name: "storage.modifier.async.js" },
              5: { name: "storage.type.property.js" },
              6: { name: "keyword.generator.asterisk.js" },
            },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            name: "meta.method.declaration.js",
            patterns: [
              { include: "#method-declaration-name" },
              { include: "#function-body" },
            ],
          },
        ],
      },
      "method-declaration-name": {
        begin:
          "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??)\\s*[\\(\\<])",
        end: "(?=\\(|\\<)",
        patterns: [
          { include: "#string" },
          { include: "#array-literal" },
          { include: "#numeric-literal" },
          {
            match: "[_$A-Za-z][_$0-9A-Za-z]*",
            name: "meta.definition.method.js entity.name.function.js",
          },
          { match: "\\?", name: "keyword.operator.optional.js" },
        ],
      },
      "namespace-declaration": {
        begin:
          "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(namespace|module)\\s+(?=[_$A-Za-z\"'`]))",
        beginCaptures: {
          1: { name: "keyword.control.export.js" },
          2: { name: "storage.modifier.js" },
          3: { name: "storage.type.namespace.js" },
        },
        end: "(?<=\\})|(?=;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
        name: "meta.namespace.declaration.js",
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          {
            match: "([_$A-Za-z][_$0-9A-Za-z]*)",
            name: "entity.name.type.module.js",
          },
          { include: "#punctuation-accessor" },
          { include: "#decl-block" },
        ],
      },
      "new-expr": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: { 1: { name: "keyword.operator.new.js" } },
        end: "(?<=\\))|(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\s+[_$A-Za-z][_$0-9A-Za-z]*)|(\\s*[\\(]))))",
        name: "new.expr.js",
        patterns: [{ include: "#expression" }],
      },
      "null-literal": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "constant.language.null.js",
      },
      "numeric-literal": {
        patterns: [
          {
            captures: { 1: { name: "storage.type.numeric.bigint.js" } },
            match: "\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)",
            name: "constant.numeric.hex.js",
          },
          {
            captures: { 1: { name: "storage.type.numeric.bigint.js" } },
            match: "\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)",
            name: "constant.numeric.binary.js",
          },
          {
            captures: { 1: { name: "storage.type.numeric.bigint.js" } },
            match: "\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)",
            name: "constant.numeric.octal.js",
          },
          {
            captures: {
              0: { name: "constant.numeric.decimal.js" },
              1: { name: "meta.delimiter.decimal.period.js" },
              2: { name: "storage.type.numeric.bigint.js" },
              3: { name: "meta.delimiter.decimal.period.js" },
              4: { name: "storage.type.numeric.bigint.js" },
              5: { name: "meta.delimiter.decimal.period.js" },
              6: { name: "storage.type.numeric.bigint.js" },
              7: { name: "storage.type.numeric.bigint.js" },
              8: { name: "meta.delimiter.decimal.period.js" },
              9: { name: "storage.type.numeric.bigint.js" },
              10: { name: "meta.delimiter.decimal.period.js" },
              11: { name: "storage.type.numeric.bigint.js" },
              12: { name: "meta.delimiter.decimal.period.js" },
              13: { name: "storage.type.numeric.bigint.js" },
              14: { name: "storage.type.numeric.bigint.js" },
            },
            match:
              "(?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$)",
          },
        ],
      },
      "numericConstant-literal": {
        patterns: [
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))NaN(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "constant.language.nan.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "constant.language.infinity.js",
          },
        ],
      },
      "object-binding-element": {
        patterns: [
          { include: "#comment" },
          {
            begin:
              "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              { include: "#object-binding-element-propertyName" },
              { include: "#binding-element" },
            ],
          },
          { include: "#object-binding-pattern" },
          { include: "#destructuring-variable-rest" },
          { include: "#variable-initializer" },
          { include: "#punctuation-comma" },
        ],
      },
      "object-binding-element-const": {
        patterns: [
          { include: "#comment" },
          {
            begin:
              "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              { include: "#object-binding-element-propertyName" },
              { include: "#binding-element-const" },
            ],
          },
          { include: "#object-binding-pattern-const" },
          { include: "#destructuring-variable-rest-const" },
          { include: "#variable-initializer" },
          { include: "#punctuation-comma" },
        ],
      },
      "object-binding-element-propertyName": {
        begin:
          "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
        end: "(:)",
        endCaptures: { 0: { name: "punctuation.destructuring.js" } },
        patterns: [
          { include: "#string" },
          { include: "#array-literal" },
          { include: "#numeric-literal" },
          {
            match: "([_$A-Za-z][_$0-9A-Za-z]*)",
            name: "variable.object.property.js",
          },
        ],
      },
      "object-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.js" },
          2: { name: "punctuation.definition.binding-pattern.object.js" },
        },
        end: "\\}",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.object.js" },
        },
        patterns: [{ include: "#object-binding-element" }],
      },
      "object-binding-pattern-const": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.js" },
          2: { name: "punctuation.definition.binding-pattern.object.js" },
        },
        end: "\\}",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.object.js" },
        },
        patterns: [{ include: "#object-binding-element-const" }],
      },
      "object-identifiers": {
        patterns: [
          {
            match:
              "([_$A-Za-z][_$0-9A-Za-z]*)(?=\\s*\\??\\.\\s*prototype\\b(?!\\$))",
            name: "support.class.js",
          },
          {
            captures: {
              1: { name: "punctuation.accessor.js" },
              2: { name: "punctuation.accessor.optional.js" },
              3: { name: "variable.other.constant.object.property.js" },
              4: { name: "variable.other.object.property.js" },
            },
            match:
              "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(?:(\\#?[A-Z][_$\\dA-Z]*)|(\\#?[_$A-Za-z][_$0-9A-Za-z]*))(?=\\s*\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*)",
          },
          {
            captures: {
              1: { name: "variable.other.constant.object.js" },
              2: { name: "variable.other.object.js" },
            },
            match:
              "(?:([A-Z][_$\\dA-Z]*)|([_$A-Za-z][_$0-9A-Za-z]*))(?=\\s*\\??\\.\\s*\\#?[_$A-Za-z][_$0-9A-Za-z]*)",
          },
        ],
      },
      "object-literal": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.definition.block.js" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.js" } },
        name: "meta.objectliteral.js",
        patterns: [{ include: "#object-member" }],
      },
      "object-literal-method-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
        beginCaptures: {
          1: { name: "storage.modifier.async.js" },
          2: { name: "storage.type.property.js" },
          3: { name: "keyword.generator.asterisk.js" },
        },
        end: "(?=\\}|;|,)|(?<=\\})",
        name: "meta.method.declaration.js",
        patterns: [
          { include: "#method-declaration-name" },
          { include: "#function-body" },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(\\*)\\s*)?(?=\\s*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(\\??))\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?[\\(])",
            beginCaptures: {
              1: { name: "storage.modifier.async.js" },
              2: { name: "storage.type.property.js" },
              3: { name: "keyword.generator.asterisk.js" },
            },
            end: "(?=\\(|\\<)",
            patterns: [{ include: "#method-declaration-name" }],
          },
        ],
      },
      "object-member": {
        patterns: [
          { include: "#comment" },
          { include: "#object-literal-method-declaration" },
          {
            begin: "(?=\\[)",
            end: "(?=:)|((?<=[\\]])(?=\\s*[\\(\\<]))",
            name: "meta.object.member.js meta.object-literal.key.js",
            patterns: [{ include: "#comment" }, { include: "#array-literal" }],
          },
          {
            begin: "(?=[\\'\\\"\\`])",
            end: "(?=:)|((?<=[\\'\\\"\\`])(?=((\\s*[\\(\\<,}])|(\\s+(as|satisifies)\\s+))))",
            name: "meta.object.member.js meta.object-literal.key.js",
            patterns: [{ include: "#comment" }, { include: "#string" }],
          },
          {
            begin:
              "(?=(\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$)))",
            end: "(?=:)|(?=\\s*([\\(\\<,}])|(\\s+as|satisifies\\s+))",
            name: "meta.object.member.js meta.object-literal.key.js",
            patterns: [
              { include: "#comment" },
              { include: "#numeric-literal" },
            ],
          },
          {
            begin: "(?<=[\\]\\'\\\"\\`])(?=\\s*[\\(\\<])",
            end: "(?=\\}|;|,)|(?<=\\})",
            name: "meta.method.declaration.js",
            patterns: [{ include: "#function-body" }],
          },
          {
            captures: {
              0: { name: "meta.object-literal.key.js" },
              1: { name: "constant.numeric.decimal.js" },
            },
            match:
              "(?![_$A-Za-z])([\\d]+)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            name: "meta.object.member.js",
          },
          {
            captures: {
              0: { name: "meta.object-literal.key.js" },
              1: { name: "entity.name.function.js" },
            },
            match:
              "(?:([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:(\\s*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/)*\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            name: "meta.object.member.js",
          },
          {
            captures: { 0: { name: "meta.object-literal.key.js" } },
            match:
              "(?:[_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*:)",
            name: "meta.object.member.js",
          },
          {
            begin: "\\.\\.\\.",
            beginCaptures: { 0: { name: "keyword.operator.spread.js" } },
            end: "(?=,|\\})",
            name: "meta.object.member.js",
            patterns: [{ include: "#expression" }],
          },
          {
            captures: { 1: { name: "variable.other.readwrite.js" } },
            match: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?=,|\\}|$|\\/\\/|\\/\\*)",
            name: "meta.object.member.js",
          },
          {
            captures: {
              1: { name: "keyword.control.as.js" },
              2: { name: "storage.modifier.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\s+(const)(?=\\s*([,}]|$))",
            name: "meta.object.member.js",
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\s+",
            beginCaptures: {
              1: { name: "keyword.control.as.js" },
              2: { name: "keyword.control.satisfies.js" },
            },
            end: "(?=[;),}\\]:?\\-\\+\\>]|\\|\\||\\&\\&|\\!\\=\\=|$|^|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisifies)\\s+))",
            name: "meta.object.member.js",
            patterns: [{ include: "#type" }],
          },
          {
            begin: "(?=[_$A-Za-z][_$0-9A-Za-z]*\\s*=)",
            end: "(?=,|\\}|$|\\/\\/|\\/\\*)",
            name: "meta.object.member.js",
            patterns: [{ include: "#expression" }],
          },
          {
            begin: ":",
            beginCaptures: {
              0: {
                name: "meta.object-literal.key.js punctuation.separator.key-value.js",
              },
            },
            end: "(?=,|\\})",
            name: "meta.object.member.js",
            patterns: [
              {
                begin:
                  "(?<=:)\\s*(async)?(?=\\s*(<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: { 1: { name: "storage.modifier.async.js" } },
                end: "(?<=\\))",
                patterns: [
                  { include: "#type-parameters" },
                  {
                    begin: "\\(",
                    beginCaptures: { 0: { name: "meta.brace.round.js" } },
                    end: "\\)",
                    endCaptures: { 0: { name: "meta.brace.round.js" } },
                    patterns: [
                      { include: "#expression-inside-possibly-arrow-parens" },
                    ],
                  },
                ],
              },
              {
                begin:
                  "(?<=:)\\s*(async)?\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: {
                  1: { name: "storage.modifier.async.js" },
                  2: { name: "meta.brace.round.js" },
                },
                end: "\\)",
                endCaptures: { 0: { name: "meta.brace.round.js" } },
                patterns: [
                  { include: "#expression-inside-possibly-arrow-parens" },
                ],
              },
              {
                begin: "(?<=:)\\s*(async)?\\s*(?=\\<\\s*$)",
                beginCaptures: { 1: { name: "storage.modifier.async.js" } },
                end: "(?<=\\>)",
                patterns: [{ include: "#type-parameters" }],
              },
              {
                begin:
                  "(?<=\\>)\\s*(\\()(?=\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
                beginCaptures: { 1: { name: "meta.brace.round.js" } },
                end: "\\)",
                endCaptures: { 0: { name: "meta.brace.round.js" } },
                patterns: [
                  { include: "#expression-inside-possibly-arrow-parens" },
                ],
              },
              { include: "#possibly-arrow-return-type" },
              { include: "#expression" },
            ],
          },
          { include: "#punctuation-comma" },
          { include: "#decl-block" },
        ],
      },
      "parameter-array-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\[)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.js" },
          2: { name: "punctuation.definition.binding-pattern.array.js" },
        },
        end: "\\]",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.array.js" },
        },
        patterns: [
          { include: "#parameter-binding-element" },
          { include: "#punctuation-comma" },
        ],
      },
      "parameter-binding-element": {
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#numeric-literal" },
          { include: "#regex" },
          { include: "#parameter-object-binding-pattern" },
          { include: "#parameter-array-binding-pattern" },
          { include: "#destructuring-parameter-rest" },
          { include: "#variable-initializer" },
        ],
      },
      "parameter-name": {
        patterns: [
          {
            captures: { 1: { name: "storage.modifier.js" } },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\s+(?=(override|public|protected|private|readonly)\\s+)",
          },
          {
            captures: {
              1: { name: "storage.modifier.js" },
              2: { name: "keyword.operator.rest.js" },
              3: { name: "entity.name.function.js variable.language.this.js" },
              4: { name: "entity.name.function.js" },
              5: { name: "keyword.operator.optional.js" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
          },
          {
            captures: {
              1: { name: "storage.modifier.js" },
              2: { name: "keyword.operator.rest.js" },
              3: { name: "variable.parameter.js variable.language.this.js" },
              4: { name: "variable.parameter.js" },
              5: { name: "keyword.operator.optional.js" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*(\\??)",
          },
        ],
      },
      "parameter-object-binding-element": {
        patterns: [
          { include: "#comment" },
          {
            begin:
              "(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\B(\\.)\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*[eE][+-]?\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)\\d[0-9_]*(n)?\\b)|(?:\\b\\d[0-9_]*(n)?\\b(?!\\.)))(?!\\$))|([_$A-Za-z][_$0-9A-Za-z]*)|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\s*(:))",
            end: "(?=,|\\})",
            patterns: [
              { include: "#object-binding-element-propertyName" },
              { include: "#parameter-binding-element" },
              { include: "#paren-expression" },
            ],
          },
          { include: "#parameter-object-binding-pattern" },
          { include: "#destructuring-parameter-rest" },
          { include: "#variable-initializer" },
          { include: "#punctuation-comma" },
        ],
      },
      "parameter-object-binding-pattern": {
        begin: "(?:(\\.\\.\\.)\\s*)?(\\{)",
        beginCaptures: {
          1: { name: "keyword.operator.rest.js" },
          2: { name: "punctuation.definition.binding-pattern.object.js" },
        },
        end: "\\}",
        endCaptures: {
          0: { name: "punctuation.definition.binding-pattern.object.js" },
        },
        patterns: [{ include: "#parameter-object-binding-element" }],
      },
      "parameter-type-annotation": {
        patterns: [
          {
            begin: "(:)",
            beginCaptures: {
              1: { name: "keyword.operator.type.annotation.js" },
            },
            end: "(?=[,)])|(?==[^>])",
            name: "meta.type.annotation.js",
            patterns: [{ include: "#type" }],
          },
        ],
      },
      "paren-expression": {
        begin: "\\(",
        beginCaptures: { 0: { name: "meta.brace.round.js" } },
        end: "\\)",
        endCaptures: { 0: { name: "meta.brace.round.js" } },
        patterns: [{ include: "#expression" }],
      },
      "paren-expression-possibly-arrow": {
        patterns: [
          {
            begin:
              "(?<=[(=,])\\s*(async)?(?=\\s*((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\(\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))",
            beginCaptures: { 1: { name: "storage.modifier.async.js" } },
            end: "(?<=\\))",
            patterns: [
              {
                include: "#paren-expression-possibly-arrow-with-typeparameters",
              },
            ],
          },
          {
            begin:
              "(?<=[(=,]|=>|^return|[^\\._$0-9A-Za-z]return)\\s*(async)?(?=\\s*((((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*))?\\()|(<)|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)))\\s*$)",
            beginCaptures: { 1: { name: "storage.modifier.async.js" } },
            end: "(?<=\\))",
            patterns: [
              {
                include: "#paren-expression-possibly-arrow-with-typeparameters",
              },
            ],
          },
          { include: "#possibly-arrow-return-type" },
        ],
      },
      "paren-expression-possibly-arrow-with-typeparameters": {
        patterns: [
          { include: "#type-parameters" },
          {
            begin: "\\(",
            beginCaptures: { 0: { name: "meta.brace.round.js" } },
            end: "\\)",
            endCaptures: { 0: { name: "meta.brace.round.js" } },
            patterns: [{ include: "#expression-inside-possibly-arrow-parens" }],
          },
        ],
      },
      "possibly-arrow-return-type": {
        begin:
          "(?<=\\)|^)\\s*(:)(?=\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*=>)",
        beginCaptures: {
          1: {
            name: "meta.arrow.js meta.return.type.arrow.js keyword.operator.type.annotation.js",
          },
        },
        contentName: "meta.arrow.js meta.return.type.arrow.js",
        end: "(?==>|\\{|(^\\s*(export|function|class|interface|let|var|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|const|import|enum|namespace|module|type|abstract|declare)\\s+))",
        patterns: [{ include: "#arrow-return-type-body" }],
      },
      "property-accessor": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(accessor|get|set)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "storage.type.property.js",
      },
      "punctuation-accessor": {
        captures: {
          1: { name: "punctuation.accessor.js" },
          2: { name: "punctuation.accessor.optional.js" },
        },
        match: "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))",
      },
      "punctuation-comma": {
        match: ",",
        name: "punctuation.separator.comma.js",
      },
      "punctuation-semicolon": {
        match: ";",
        name: "punctuation.terminator.statement.js",
      },
      "qstring-double": {
        begin: '"',
        beginCaptures: {
          0: { name: "punctuation.definition.string.begin.js" },
        },
        end: '(")|((?:[^\\\\\\n])$)',
        endCaptures: {
          1: { name: "punctuation.definition.string.end.js" },
          2: { name: "invalid.illegal.newline.js" },
        },
        name: "string.quoted.double.js",
        patterns: [{ include: "#string-character-escape" }],
      },
      "qstring-single": {
        begin: "'",
        beginCaptures: {
          0: { name: "punctuation.definition.string.begin.js" },
        },
        end: "(\\')|((?:[^\\\\\\n])$)",
        endCaptures: {
          1: { name: "punctuation.definition.string.end.js" },
          2: { name: "invalid.illegal.newline.js" },
        },
        name: "string.quoted.single.js",
        patterns: [{ include: "#string-character-escape" }],
      },
      regex: {
        patterns: [
          {
            begin:
              "(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$0-9A-Za-z]return|^case|[^\\._$0-9A-Za-z]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
            beginCaptures: {
              1: { name: "punctuation.definition.string.begin.js" },
            },
            end: "(/)([dgimsuy]*)",
            endCaptures: {
              1: { name: "punctuation.definition.string.end.js" },
              2: { name: "keyword.other.js" },
            },
            name: "string.regexp.js",
            patterns: [{ include: "#regexp" }],
          },
          {
            begin:
              "((?<![_$0-9A-Za-z)\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$0-9A-Za-z]return|^case|[^\\._$0-9A-Za-z]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
            beginCaptures: {
              0: { name: "punctuation.definition.string.begin.js" },
            },
            end: "(/)([dgimsuy]*)",
            endCaptures: {
              1: { name: "punctuation.definition.string.end.js" },
              2: { name: "keyword.other.js" },
            },
            name: "string.regexp.js",
            patterns: [{ include: "#regexp" }],
          },
        ],
      },
      "regex-character-class": {
        patterns: [
          {
            match: "\\\\[wWsSdDtrnvf]|\\.",
            name: "constant.other.character-class.regexp",
          },
          {
            match: "\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})",
            name: "constant.character.numeric.regexp",
          },
          { match: "\\\\c[A-Z]", name: "constant.character.control.regexp" },
          {
            match: "\\\\.",
            name: "constant.character.escape.backslash.regexp",
          },
        ],
      },
      regexp: {
        patterns: [
          { match: "\\\\[bB]|\\^|\\$", name: "keyword.control.anchor.regexp" },
          {
            captures: {
              0: { name: "keyword.other.back-reference.regexp" },
              1: { name: "variable.other.regexp" },
            },
            match: "\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>",
          },
          {
            match: "[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??",
            name: "keyword.operator.quantifier.regexp",
          },
          { match: "\\|", name: "keyword.operator.or.regexp" },
          {
            begin: "(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))",
            beginCaptures: {
              1: { name: "punctuation.definition.group.regexp" },
              2: { name: "punctuation.definition.group.assertion.regexp" },
              3: { name: "meta.assertion.look-ahead.regexp" },
              4: { name: "meta.assertion.negative-look-ahead.regexp" },
              5: { name: "meta.assertion.look-behind.regexp" },
              6: { name: "meta.assertion.negative-look-behind.regexp" },
            },
            end: "(\\))",
            endCaptures: { 1: { name: "punctuation.definition.group.regexp" } },
            name: "meta.group.assertion.regexp",
            patterns: [{ include: "#regexp" }],
          },
          {
            begin: "\\((?:(\\?:)|(?:\\?<([a-zA-Z_$][\\w$]*)>))?",
            beginCaptures: {
              0: { name: "punctuation.definition.group.regexp" },
              1: { name: "punctuation.definition.group.no-capture.regexp" },
              2: { name: "variable.other.regexp" },
            },
            end: "\\)",
            endCaptures: { 0: { name: "punctuation.definition.group.regexp" } },
            name: "meta.group.regexp",
            patterns: [{ include: "#regexp" }],
          },
          {
            begin: "(\\[)(\\^)?",
            beginCaptures: {
              1: { name: "punctuation.definition.character-class.regexp" },
              2: { name: "keyword.operator.negation.regexp" },
            },
            end: "(\\])",
            endCaptures: {
              1: { name: "punctuation.definition.character-class.regexp" },
            },
            name: "constant.other.character-class.set.regexp",
            patterns: [
              {
                captures: {
                  1: { name: "constant.character.numeric.regexp" },
                  2: { name: "constant.character.control.regexp" },
                  3: { name: "constant.character.escape.backslash.regexp" },
                  4: { name: "constant.character.numeric.regexp" },
                  5: { name: "constant.character.control.regexp" },
                  6: { name: "constant.character.escape.backslash.regexp" },
                },
                match:
                  "(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))",
                name: "constant.other.character-class.range.regexp",
              },
              { include: "#regex-character-class" },
            ],
          },
          { include: "#regex-character-class" },
        ],
      },
      "return-type": {
        patterns: [
          {
            begin: "(?<=\\))\\s*(:)(?=\\s*\\S)",
            beginCaptures: {
              1: { name: "keyword.operator.type.annotation.js" },
            },
            end: "(?<![:|&])(?=$|^|[{};,]|//)",
            name: "meta.return.type.js",
            patterns: [{ include: "#return-type-core" }],
          },
          {
            begin: "(?<=\\))\\s*(:)",
            beginCaptures: {
              1: { name: "keyword.operator.type.annotation.js" },
            },
            end: "(?<![:|&])((?=[{};,]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            name: "meta.return.type.js",
            patterns: [{ include: "#return-type-core" }],
          },
        ],
      },
      "return-type-core": {
        patterns: [
          { include: "#comment" },
          {
            begin: "(?<=[:|&])(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [{ include: "#type-object" }],
          },
          { include: "#type-predicate-operator" },
          { include: "#type" },
        ],
      },
      shebang: {
        captures: { 1: { name: "punctuation.definition.comment.js" } },
        match: "\\A(#!).*(?=$)",
        name: "comment.line.shebang.js",
      },
      "single-line-comment-consuming-line-ending": {
        begin: "(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",
        beginCaptures: {
          1: { name: "punctuation.whitespace.comment.leading.js" },
          2: { name: "comment.line.double-slash.js" },
          3: { name: "punctuation.definition.comment.js" },
          4: { name: "storage.type.internaldeclaration.js" },
          5: { name: "punctuation.decorator.internaldeclaration.js" },
        },
        contentName: "comment.line.double-slash.js",
        end: "(?=^)",
      },
      statements: {
        patterns: [
          { include: "#declaration" },
          { include: "#control-statement" },
          { include: "#after-operator-block-as-object-literal" },
          { include: "#decl-block" },
          { include: "#label" },
          { include: "#expression" },
          { include: "#punctuation-semicolon" },
          { include: "#string" },
          { include: "#comment" },
        ],
      },
      string: {
        patterns: [
          { include: "#qstring-single" },
          { include: "#qstring-double" },
          { include: "#template" },
        ],
      },
      "string-character-escape": {
        match:
          "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)",
        name: "constant.character.escape.js",
      },
      "super-literal": {
        match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)",
        name: "variable.language.super.js",
      },
      "support-function-call-identifiers": {
        patterns: [
          { include: "#literal" },
          { include: "#support-objects" },
          { include: "#object-identifiers" },
          { include: "#punctuation-accessor" },
          {
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*[\\(]\\s*[\\\"\\'\\`]))",
            name: "keyword.operator.expression.import.js",
          },
        ],
      },
      "support-objects": {
        patterns: [
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(arguments)\\b(?!\\$)",
            name: "variable.language.arguments.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)",
            name: "support.class.promise.js",
          },
          {
            captures: {
              1: { name: "keyword.control.import.js" },
              2: { name: "punctuation.accessor.js" },
              3: { name: "punctuation.accessor.optional.js" },
              4: { name: "support.variable.property.importmeta.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(meta)\\b(?!\\$)",
          },
          {
            captures: {
              1: { name: "keyword.operator.new.js" },
              2: { name: "punctuation.accessor.js" },
              3: { name: "punctuation.accessor.optional.js" },
              4: { name: "support.variable.property.target.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(target)\\b(?!\\$)",
          },
          {
            captures: {
              1: { name: "punctuation.accessor.js" },
              2: { name: "punctuation.accessor.optional.js" },
              3: { name: "support.variable.property.js" },
              4: { name: "support.constant.js" },
            },
            match:
              "(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(?:(?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\s*(<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\())|(?:(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$)))",
          },
          {
            captures: {
              1: { name: "support.type.object.module.js" },
              2: { name: "support.type.object.module.js" },
              3: { name: "punctuation.accessor.js" },
              4: { name: "punctuation.accessor.optional.js" },
              5: { name: "support.type.object.module.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(exports)|(module)(?:(?:(\\.)|(\\?\\.(?!\\s*[\\d])))(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)",
          },
        ],
      },
      "switch-statement": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bswitch\\s*\\()",
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.js" } },
        name: "switch-statement.expr.js",
        patterns: [
          { include: "#comment" },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\s*(\\()",
            beginCaptures: {
              1: { name: "keyword.control.switch.js" },
              2: { name: "meta.brace.round.js" },
            },
            end: "\\)",
            endCaptures: { 0: { name: "meta.brace.round.js" } },
            name: "switch-expression.expr.js",
            patterns: [{ include: "#expression" }],
          },
          {
            begin: "\\{",
            beginCaptures: { 0: { name: "punctuation.definition.block.js" } },
            end: "(?=\\})",
            name: "switch-block.expr.js",
            patterns: [
              {
                begin:
                  "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
                beginCaptures: { 1: { name: "keyword.control.switch.js" } },
                end: "(?=:)",
                name: "case-clause.expr.js",
                patterns: [{ include: "#expression" }],
              },
              {
                begin: "(:)\\s*(\\{)",
                beginCaptures: {
                  1: {
                    name: "case-clause.expr.js punctuation.definition.section.case-statement.js",
                  },
                  2: { name: "meta.block.js punctuation.definition.block.js" },
                },
                contentName: "meta.block.js",
                end: "\\}",
                endCaptures: {
                  0: { name: "meta.block.js punctuation.definition.block.js" },
                },
                patterns: [{ include: "#statements" }],
              },
              {
                captures: {
                  0: {
                    name: "case-clause.expr.js punctuation.definition.section.case-statement.js",
                  },
                },
                match: "(:)",
              },
              { include: "#statements" },
            ],
          },
        ],
      },
      template: {
        patterns: [
          { include: "#template-call" },
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)?(`)",
            beginCaptures: {
              1: { name: "entity.name.function.tagged-template.js" },
              2: {
                name: "string.template.js punctuation.definition.string.template.begin.js",
              },
            },
            contentName: "string.template.js",
            end: "`",
            endCaptures: {
              0: {
                name: "string.template.js punctuation.definition.string.template.end.js",
              },
            },
            patterns: [
              { include: "#template-substitution-element" },
              { include: "#string-character-escape" },
            ],
          },
        ],
      },
      "template-call": {
        patterns: [
          {
            begin:
              "(?=(([_$A-Za-z][_$0-9A-Za-z]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$A-Za-z][_$0-9A-Za-z]*)(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",
            end: "(?=`)",
            patterns: [
              {
                begin:
                  "(?=(([_$A-Za-z][_$0-9A-Za-z]*\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$A-Za-z][_$0-9A-Za-z]*))",
                end: "(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)?`)",
                patterns: [
                  { include: "#support-function-call-identifiers" },
                  {
                    match: "([_$A-Za-z][_$0-9A-Za-z]*)",
                    name: "entity.name.function.tagged-template.js",
                  },
                ],
              },
              { include: "#type-arguments" },
            ],
          },
          {
            begin:
              "([_$A-Za-z][_$0-9A-Za-z]*)?\\s*(?=(<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>|\\<\\s*(((keyof|infer|typeof|readonly)\\s+)|(([_$A-Za-z][_$0-9A-Za-z]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))(?=\\s*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^<>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)\\>)*(?<!=)\\>))*(?<!=)\\>)*(?<!=)>\\s*)`)",
            beginCaptures: {
              1: { name: "entity.name.function.tagged-template.js" },
            },
            end: "(?=`)",
            patterns: [{ include: "#type-arguments" }],
          },
        ],
      },
      "template-substitution-element": {
        begin: "\\$\\{",
        beginCaptures: {
          0: { name: "punctuation.definition.template-expression.begin.js" },
        },
        contentName: "meta.embedded.line.js",
        end: "\\}",
        endCaptures: {
          0: { name: "punctuation.definition.template-expression.end.js" },
        },
        name: "meta.template.expression.js",
        patterns: [{ include: "#expression" }],
      },
      "template-type": {
        patterns: [
          { include: "#template-call" },
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)?(`)",
            beginCaptures: {
              1: { name: "entity.name.function.tagged-template.js" },
              2: {
                name: "string.template.js punctuation.definition.string.template.begin.js",
              },
            },
            contentName: "string.template.js",
            end: "`",
            endCaptures: {
              0: {
                name: "string.template.js punctuation.definition.string.template.end.js",
              },
            },
            patterns: [
              { include: "#template-type-substitution-element" },
              { include: "#string-character-escape" },
            ],
          },
        ],
      },
      "template-type-substitution-element": {
        begin: "\\$\\{",
        beginCaptures: {
          0: { name: "punctuation.definition.template-expression.begin.js" },
        },
        contentName: "meta.embedded.line.js",
        end: "\\}",
        endCaptures: {
          0: { name: "punctuation.definition.template-expression.end.js" },
        },
        name: "meta.template.expression.js",
        patterns: [{ include: "#type" }],
      },
      "ternary-expression": {
        begin: "(?!\\?\\.\\s*[^\\d])(\\?)(?!\\?)",
        beginCaptures: { 1: { name: "keyword.operator.ternary.js" } },
        end: "\\s*(:)",
        endCaptures: { 1: { name: "keyword.operator.ternary.js" } },
        patterns: [{ include: "#expression" }],
      },
      "this-literal": {
        match: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))this\\b(?!\\$)",
        name: "variable.language.this.js",
      },
      type: {
        patterns: [
          { include: "#comment" },
          { include: "#type-string" },
          { include: "#numeric-literal" },
          { include: "#type-primitive" },
          { include: "#type-builtin-literals" },
          { include: "#type-parameters" },
          { include: "#type-tuple" },
          { include: "#type-object" },
          { include: "#type-operators" },
          { include: "#type-conditional" },
          { include: "#type-fn-type-parameters" },
          { include: "#type-paren-or-function-parameters" },
          { include: "#type-function-return-type" },
          {
            captures: { 1: { name: "storage.modifier.js" } },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
          },
          { include: "#type-name" },
        ],
      },
      "type-alias-declaration": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(type)\\b\\s+([_$A-Za-z][_$0-9A-Za-z]*)\\s*",
        beginCaptures: {
          1: { name: "keyword.control.export.js" },
          2: { name: "storage.modifier.js" },
          3: { name: "storage.type.type.js" },
          4: { name: "entity.name.type.alias.js" },
        },
        end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
        name: "meta.type.declaration.js",
        patterns: [
          { include: "#comment" },
          { include: "#type-parameters" },
          {
            begin:
              "(=)\\s*(intrinsic)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            beginCaptures: {
              1: { name: "keyword.operator.assignment.js" },
              2: { name: "keyword.control.intrinsic.js" },
            },
            end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            patterns: [{ include: "#type" }],
          },
          {
            begin: "(=)\\s*",
            beginCaptures: { 1: { name: "keyword.operator.assignment.js" } },
            end: "(?=\\}|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
            patterns: [{ include: "#type" }],
          },
        ],
      },
      "type-annotation": {
        patterns: [
          {
            begin: "(:)(?=\\s*\\S)",
            beginCaptures: {
              1: { name: "keyword.operator.type.annotation.js" },
            },
            end: "(?<![:|&])(?!\\s*[|&]\\s+)((?=^|[,);\\}\\]]|//)|(?==[^>])|((?<=[\\}>\\]\\)]|[_$A-Za-z])\\s*(?=\\{)))",
            name: "meta.type.annotation.js",
            patterns: [{ include: "#type" }],
          },
          {
            begin: "(:)",
            beginCaptures: {
              1: { name: "keyword.operator.type.annotation.js" },
            },
            end: "(?<![:|&])((?=[,);\\}\\]]|\\/\\/)|(?==[^>])|(?=^\\s*$)|((?<=[\\}>\\]\\)]|[_$A-Za-z])\\s*(?=\\{)))",
            name: "meta.type.annotation.js",
            patterns: [{ include: "#type" }],
          },
        ],
      },
      "type-arguments": {
        begin: "\\<",
        beginCaptures: {
          0: { name: "punctuation.definition.typeparameters.begin.js" },
        },
        end: "\\>",
        endCaptures: {
          0: { name: "punctuation.definition.typeparameters.end.js" },
        },
        name: "meta.type.parameters.js",
        patterns: [{ include: "#type-arguments-body" }],
      },
      "type-arguments-body": {
        patterns: [
          {
            captures: { 0: { name: "keyword.operator.type.js" } },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(_)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
          },
          { include: "#type" },
          { include: "#punctuation-comma" },
        ],
      },
      "type-builtin-literals": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(this|true|false|undefined|null|object)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "support.type.builtin.js",
      },
      "type-conditional": {
        patterns: [
          {
            begin: "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\s+",
            beginCaptures: { 1: { name: "storage.modifier.js" } },
            end: "(?<=:)",
            patterns: [
              {
                begin: "\\?",
                beginCaptures: { 0: { name: "keyword.operator.ternary.js" } },
                end: ":",
                endCaptures: { 0: { name: "keyword.operator.ternary.js" } },
                patterns: [{ include: "#type" }],
              },
              { include: "#type" },
            ],
          },
        ],
      },
      "type-fn-type-parameters": {
        patterns: [
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b(?=\\s*\\<)",
            beginCaptures: {
              1: { name: "meta.type.constructor.js storage.modifier.js" },
              2: { name: "meta.type.constructor.js keyword.control.new.js" },
            },
            end: "(?<=>)",
            patterns: [
              { include: "#comment" },
              { include: "#type-parameters" },
            ],
          },
          {
            begin:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\s+)?(new)\\b\\s*(?=\\()",
            beginCaptures: {
              1: { name: "storage.modifier.js" },
              2: { name: "keyword.control.new.js" },
            },
            end: "(?<=\\))",
            name: "meta.type.constructor.js",
            patterns: [{ include: "#function-parameters" }],
          },
          {
            begin:
              "((?=[(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>))))))",
            end: "(?<=\\))",
            name: "meta.type.function.js",
            patterns: [{ include: "#function-parameters" }],
          },
        ],
      },
      "type-function-return-type": {
        patterns: [
          {
            begin: "(=>)(?=\\s*\\S)",
            beginCaptures: { 1: { name: "storage.type.function.arrow.js" } },
            end: "(?<!=>)(?<![|&])(?=[,\\]\\)\\{\\}=;>:\\?]|//|$)",
            name: "meta.type.function.return.js",
            patterns: [{ include: "#type-function-return-type-core" }],
          },
          {
            begin: "=>",
            beginCaptures: { 0: { name: "storage.type.function.arrow.js" } },
            end: "(?<!=>)(?<![|&])((?=[,\\]\\)\\{\\}=;:\\?>]|//|^\\s*$)|((?<=\\S)(?=\\s*$)))",
            name: "meta.type.function.return.js",
            patterns: [{ include: "#type-function-return-type-core" }],
          },
        ],
      },
      "type-function-return-type-core": {
        patterns: [
          { include: "#comment" },
          {
            begin: "(?<==>)(?=\\s*\\{)",
            end: "(?<=\\})",
            patterns: [{ include: "#type-object" }],
          },
          { include: "#type-predicate-operator" },
          { include: "#type" },
        ],
      },
      "type-infer": {
        patterns: [
          {
            captures: {
              1: { name: "keyword.operator.expression.infer.js" },
              2: { name: "entity.name.type.js" },
              3: { name: "keyword.operator.expression.extends.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(infer)\\s+([_$A-Za-z][_$0-9A-Za-z]*)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\s+(extends)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))?",
            name: "meta.type.infer.js",
          },
        ],
      },
      "type-name": {
        patterns: [
          {
            begin:
              "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))\\s*(<)",
            captures: {
              1: { name: "entity.name.type.module.js" },
              2: { name: "punctuation.accessor.js" },
              3: { name: "punctuation.accessor.optional.js" },
              4: {
                name: "meta.type.parameters.js punctuation.definition.typeparameters.begin.js",
              },
            },
            contentName: "meta.type.parameters.js",
            end: "(>)",
            endCaptures: {
              1: {
                name: "meta.type.parameters.js punctuation.definition.typeparameters.end.js",
              },
            },
            patterns: [{ include: "#type-arguments-body" }],
          },
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(<)",
            beginCaptures: {
              1: { name: "entity.name.type.js" },
              2: {
                name: "meta.type.parameters.js punctuation.definition.typeparameters.begin.js",
              },
            },
            contentName: "meta.type.parameters.js",
            end: "(>)",
            endCaptures: {
              1: {
                name: "meta.type.parameters.js punctuation.definition.typeparameters.end.js",
              },
            },
            patterns: [{ include: "#type-arguments-body" }],
          },
          {
            captures: {
              1: { name: "entity.name.type.module.js" },
              2: { name: "punctuation.accessor.js" },
              3: { name: "punctuation.accessor.optional.js" },
            },
            match:
              "([_$A-Za-z][_$0-9A-Za-z]*)\\s*(?:(\\.)|(\\?\\.(?!\\s*[\\d])))",
          },
          { match: "[_$A-Za-z][_$0-9A-Za-z]*", name: "entity.name.type.js" },
        ],
      },
      "type-object": {
        begin: "\\{",
        beginCaptures: { 0: { name: "punctuation.definition.block.js" } },
        end: "\\}",
        endCaptures: { 0: { name: "punctuation.definition.block.js" } },
        name: "meta.object.type.js",
        patterns: [
          { include: "#comment" },
          { include: "#method-declaration" },
          { include: "#indexer-declaration" },
          { include: "#indexer-mapped-type-declaration" },
          { include: "#field-declaration" },
          { include: "#type-annotation" },
          {
            begin: "\\.\\.\\.",
            beginCaptures: { 0: { name: "keyword.operator.spread.js" } },
            end: "(?=\\}|;|,|$)|(?<=\\})",
            patterns: [{ include: "#type" }],
          },
          { include: "#punctuation-comma" },
          { include: "#punctuation-semicolon" },
          { include: "#type" },
        ],
      },
      "type-operators": {
        patterns: [
          { include: "#typeof-operator" },
          { include: "#type-infer" },
          {
            begin: "([&|])(?=\\s*\\{)",
            beginCaptures: { 0: { name: "keyword.operator.type.js" } },
            end: "(?<=\\})",
            patterns: [{ include: "#type-object" }],
          },
          {
            begin: "[&|]",
            beginCaptures: { 0: { name: "keyword.operator.type.js" } },
            end: "(?=\\S)",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.expression.keyof.js",
          },
          { match: "(\\?|\\:)", name: "keyword.operator.ternary.js" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\s*\\()",
            name: "keyword.operator.expression.import.js",
          },
        ],
      },
      "type-parameters": {
        begin: "(<)",
        beginCaptures: {
          1: { name: "punctuation.definition.typeparameters.begin.js" },
        },
        end: "(>)",
        endCaptures: {
          1: { name: "punctuation.definition.typeparameters.end.js" },
        },
        name: "meta.type.parameters.js",
        patterns: [
          { include: "#comment" },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "storage.modifier.js",
          },
          { include: "#type" },
          { include: "#punctuation-comma" },
          { match: "(=)(?!>)", name: "keyword.operator.assignment.js" },
        ],
      },
      "type-paren-or-function-parameters": {
        begin: "\\(",
        beginCaptures: { 0: { name: "meta.brace.round.js" } },
        end: "\\)",
        endCaptures: { 0: { name: "meta.brace.round.js" } },
        name: "meta.type.paren.cover.js",
        patterns: [
          {
            captures: {
              1: { name: "storage.modifier.js" },
              2: { name: "keyword.operator.rest.js" },
              3: { name: "entity.name.function.js variable.language.this.js" },
              4: { name: "entity.name.function.js" },
              5: { name: "keyword.operator.optional.js" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))\\s*(\\??)(?=\\s*(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))))",
          },
          {
            captures: {
              1: { name: "storage.modifier.js" },
              2: { name: "keyword.operator.rest.js" },
              3: { name: "variable.parameter.js variable.language.this.js" },
              4: { name: "variable.parameter.js" },
              5: { name: "keyword.operator.optional.js" },
            },
            match:
              "(?:(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\s+)?(?:(\\.\\.\\.)\\s*)?(?<!=|:)(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))\\s*(\\??)(?=:)",
          },
          { include: "#type-annotation" },
          { match: ",", name: "punctuation.separator.parameter.js" },
          { include: "#type" },
        ],
      },
      "type-predicate-operator": {
        patterns: [
          {
            captures: {
              1: { name: "keyword.operator.type.asserts.js" },
              2: { name: "variable.parameter.js variable.language.this.js" },
              3: { name: "variable.parameter.js" },
              4: { name: "keyword.operator.expression.is.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\s+)?(?!asserts)(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))\\s(is)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
          },
          {
            captures: {
              1: { name: "keyword.operator.type.asserts.js" },
              2: { name: "variable.parameter.js variable.language.this.js" },
              3: { name: "variable.parameter.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(asserts)\\s+(?!is)(?:(this)|([_$A-Za-z][_$0-9A-Za-z]*))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))asserts(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.type.asserts.js",
          },
          {
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
            name: "keyword.operator.expression.is.js",
          },
        ],
      },
      "type-primitive": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "support.type.primitive.js",
      },
      "type-string": {
        patterns: [
          { include: "#qstring-single" },
          { include: "#qstring-double" },
          { include: "#template-type" },
        ],
      },
      "type-tuple": {
        begin: "\\[",
        beginCaptures: { 0: { name: "meta.brace.square.js" } },
        end: "\\]",
        endCaptures: { 0: { name: "meta.brace.square.js" } },
        name: "meta.type.tuple.js",
        patterns: [
          { match: "\\.\\.\\.", name: "keyword.operator.rest.js" },
          {
            captures: {
              1: { name: "entity.name.label.js" },
              2: { name: "keyword.operator.optional.js" },
              3: { name: "punctuation.separator.label.js" },
            },
            match:
              "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))([_$A-Za-z][_$0-9A-Za-z]*)\\s*(\\?)?\\s*(:)",
          },
          { include: "#type" },
          { include: "#punctuation-comma" },
        ],
      },
      "typeof-operator": {
        begin:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))typeof(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        beginCaptures: { 0: { name: "keyword.operator.expression.typeof.js" } },
        end: "(?=[,);}\\]=>:&|{\\?]|(extends\\s+)|$|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))",
        patterns: [{ include: "#type-arguments" }, { include: "#expression" }],
      },
      "undefined-literal": {
        match:
          "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))undefined(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))",
        name: "constant.language.undefined.js",
      },
      "var-expr": {
        patterns: [
          {
            begin:
              "(?=(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))",
            end: "(?!(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|((?<!^let|[^\\._$0-9A-Za-z]let|^var|[^\\._$0-9A-Za-z]var)(?=\\s*$)))",
            name: "meta.var.expr.js",
            patterns: [
              {
                begin:
                  "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(var|let)(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: { name: "keyword.control.export.js" },
                  2: { name: "storage.modifier.js" },
                  3: { name: "storage.type.js" },
                },
                end: "(?=\\S)",
              },
              { include: "#destructuring-variable" },
              { include: "#var-single-variable" },
              { include: "#variable-initializer" },
              { include: "#comment" },
              {
                begin: "(,)\\s*(?=$|\\/\\/)",
                beginCaptures: {
                  1: { name: "punctuation.separator.comma.js" },
                },
                end: "(?<!,)(((?==|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  { include: "#single-line-comment-consuming-line-ending" },
                  { include: "#comment" },
                  { include: "#destructuring-variable" },
                  { include: "#var-single-variable" },
                  { include: "#punctuation-comma" },
                ],
              },
              { include: "#punctuation-comma" },
            ],
          },
          {
            begin:
              "(?=(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))",
            beginCaptures: {
              1: { name: "keyword.control.export.js" },
              2: { name: "storage.modifier.js" },
              3: { name: "storage.type.js" },
            },
            end: "(?!(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|((?<!^const|[^\\._$0-9A-Za-z]const)(?=\\s*$)))",
            name: "meta.var.expr.js",
            patterns: [
              {
                begin:
                  "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b(const(?!\\s+enum\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: { name: "keyword.control.export.js" },
                  2: { name: "storage.modifier.js" },
                  3: { name: "storage.type.js" },
                },
                end: "(?=\\S)",
              },
              { include: "#destructuring-const" },
              { include: "#var-single-const" },
              { include: "#variable-initializer" },
              { include: "#comment" },
              {
                begin: "(,)\\s*(?=$|\\/\\/)",
                beginCaptures: {
                  1: { name: "punctuation.separator.comma.js" },
                },
                end: "(?<!,)(((?==|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  { include: "#single-line-comment-consuming-line-ending" },
                  { include: "#comment" },
                  { include: "#destructuring-const" },
                  { include: "#var-single-const" },
                  { include: "#punctuation-comma" },
                ],
              },
              { include: "#punctuation-comma" },
            ],
          },
          {
            begin:
              "(?=(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))",
            beginCaptures: {
              1: { name: "keyword.control.export.js" },
              2: { name: "storage.modifier.js" },
              3: { name: "storage.type.js" },
            },
            end: "(?!(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b))|((?<!^using|[^\\._$0-9A-Za-z]using|^await\\s+using|[^\\._$0-9A-Za-z]await\\s+using)(?=\\s*$)))",
            name: "meta.var.expr.js",
            patterns: [
              {
                begin:
                  "(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\s+)?(?:(\\bdeclare)\\s+)?\\b((?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b))(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.))\\s*",
                beginCaptures: {
                  1: { name: "keyword.control.export.js" },
                  2: { name: "storage.modifier.js" },
                  3: { name: "storage.type.js" },
                },
                end: "(?=\\S)",
              },
              { include: "#var-single-const" },
              { include: "#variable-initializer" },
              { include: "#comment" },
              {
                begin: "(,)\\s*((?!\\S)|(?=\\/\\/))",
                beginCaptures: {
                  1: { name: "punctuation.separator.comma.js" },
                },
                end: "(?<!,)(((?==|;|}|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|^\\s*$))|((?<=\\S)(?=\\s*$)))",
                patterns: [
                  { include: "#single-line-comment-consuming-line-ending" },
                  { include: "#comment" },
                  { include: "#var-single-const" },
                  { include: "#punctuation-comma" },
                ],
              },
              { include: "#punctuation-comma" },
            ],
          },
        ],
      },
      "var-single-const": {
        patterns: [
          {
            begin:
              "([_$A-Za-z][_$0-9A-Za-z]*)(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.js variable.other.constant.js entity.name.function.js",
              },
            },
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            name: "meta.var-single-variable.expr.js",
            patterns: [{ include: "#var-single-variable-type-annotation" }],
          },
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.js variable.other.constant.js",
              },
            },
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            name: "meta.var-single-variable.expr.js",
            patterns: [{ include: "#var-single-variable-type-annotation" }],
          },
        ],
      },
      "var-single-variable": {
        patterns: [
          {
            begin:
              "([_$A-Za-z][_$0-9A-Za-z]*)(\\!)?(?=\\s*(=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>)))))|(:\\s*((<)|([(]\\s*(([)])|(\\.\\.\\.)|([_$0-9A-Za-z]+\\s*(([:,?=])|([)]\\s*=>)))))))|(:\\s*(?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_$0-9A-Za-z])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\s*((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))))))|(:\\s*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^<>]*>)|[^<>(),=])+=\\s*(((async\\s+)?((function\\s*[(<*])|(function\\s+)|([_$A-Za-z][_$0-9A-Za-z]*\\s*=>)))|((async\\s*)?(((<\\s*$)|([\\(]\\s*((([\\{\\[]\\s*)?$)|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\s*((:\\s*\\{?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\s*((:\\s*\\[?$)|((\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\s*)?=\\s*))))))|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?[(]\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([)]\\s*:)|((\\.\\.\\.\\s*)?[_$A-Za-z][_$0-9A-Za-z]*\\s*:)))|([<]\\s*[_$A-Za-z][_$0-9A-Za-z]*\\s+extends\\s*[^=>])|((<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<]|\\<\\s*(((const\\s+)?[_$A-Za-z])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^=<>]|=[^<])*\\>)*\\>)*>\\s*)?\\(\\s*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\s*)*(([_$A-Za-z]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\s*[_$A-Za-z]))([^()\\'\\\"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`))*)?\\)(\\s*:\\s*([^<>\\(\\)\\{\\}]|\\<([^<>]|\\<([^<>]|\\<[^<>]+\\>)+\\>)+\\>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\s*=>))))))",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.js entity.name.function.js",
              },
              2: { name: "keyword.operator.definiteassignment.js" },
            },
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            name: "meta.var-single-variable.expr.js",
            patterns: [{ include: "#var-single-variable-type-annotation" }],
          },
          {
            begin: "([A-Z][_$\\dA-Z]*)(?![_$0-9A-Za-z])(\\!)?",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.js variable.other.constant.js",
              },
              2: { name: "keyword.operator.definiteassignment.js" },
            },
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            name: "meta.var-single-variable.expr.js",
            patterns: [{ include: "#var-single-variable-type-annotation" }],
          },
          {
            begin: "([_$A-Za-z][_$0-9A-Za-z]*)(\\!)?",
            beginCaptures: {
              1: {
                name: "meta.definition.variable.js variable.other.readwrite.js",
              },
              2: { name: "keyword.operator.definiteassignment.js" },
            },
            end: "(?=$|^|[;,=}]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+)|(;|^\\s*$|(?:^\\s*(?:abstract|async|(?:\\bawait\\s+(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)\\b)|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|(?:\\busing(?=\\s+(?!in\\b|of\\b(?!\\s*(?:of\\b|=)))[_$A-Za-z])\\b)|var|while)\\b)))",
            name: "meta.var-single-variable.expr.js",
            patterns: [{ include: "#var-single-variable-type-annotation" }],
          },
        ],
      },
      "var-single-variable-type-annotation": {
        patterns: [
          { include: "#type-annotation" },
          { include: "#string" },
          { include: "#comment" },
        ],
      },
      "variable-initializer": {
        patterns: [
          {
            begin: "(?<!=|!)(=)(?!=)(?=\\s*\\S)(?!\\s*.*=>\\s*$)",
            beginCaptures: { 1: { name: "keyword.operator.assignment.js" } },
            end: "(?=$|^|[,);}\\]]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))",
            patterns: [{ include: "#expression" }],
          },
          {
            begin: "(?<!=|!)(=)(?!=)",
            beginCaptures: { 1: { name: "keyword.operator.assignment.js" } },
            end: "(?=[,);}\\]]|((?<![_$0-9A-Za-z])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\s+))|(?=^\\s*$)|(?<![\\|\\&\\+\\-\\*\\/])(?<=\\S)(?<!=)(?=\\s*$)",
            patterns: [{ include: "#expression" }],
          },
        ],
      },
    },
    scopeName: "source.js",
    aliases: ["js"],
  }),
];
export { e as default };
