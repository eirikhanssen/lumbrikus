<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
   exclude-result-prefixes="xsl svg xlink">
  <xsl:output omit-xml-declaration="yes" indent="no"/>
  <xsl:template match="/">
    <ol class="icons">
      <xsl:for-each select="//svg:symbol">
        <li>
          <svg><xsl:attribute name="class"><xsl:text>icon</xsl:text></xsl:attribute><use><xsl:attribute name="href">/media/svg/lumbrikus-symbol-icons.svg#<xsl:value-of select="@id"/></xsl:attribute></use></svg>
          <a>
            <xsl:attribute name="data-href"><xsl:value-of select="concat('/media/svg/lumbrikus-symbol-icons.svg#',@id)"/></xsl:attribute>
            <xsl:attribute name="title"><xsl:value-of select="@id"/></xsl:attribute>
            <span class="icon-id">#<xsl:value-of select="@id"/></span>
          </a>
        </li>
      </xsl:for-each>
    </ol>
  </xsl:template>
</xsl:stylesheet>